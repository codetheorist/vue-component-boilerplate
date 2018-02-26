const fs = require('fs')
const path = require('path')
const toPascal = require('to-pascal-case')

module.exports = {
	prompts: {
		name: {
			type: "string",
			required: true,
			label: "Component Name (kebab-case format)",
			default: "awesome-new-component",
			message: "The name of your awesome new Vue component."
		},
		description: {
			type: "string",
			required: true,
			label: "Component Description",
			default: "A Vue.js component module",
			message: "A brief description of your awesome new component."
		},
		author: {
			type: "string",
			label: "Author"
		}
	},
	helpers: {
		camelcase: function(str) {
			return str.replace(/([\-_\s]+[a-z])|(^[a-z])/g, $1 => $1.toUpperCase())
							.replace(/[\-_\s]+/g, '')
		},
		pascalcase: function(str) {
			return toPascal(str)
		}
	},
	complete: function(data, {logger}) {
		// Rename to be compatible with styleguide configuration
		const cmpDir = data.inPlace?'src/Component':path.resolve(data.destDirName, 'src/Component')
		const testDir = data.inPlace?'test':path.resolve(data.destDirName, 'test')
		const pascalName = toPascal(data.name)
		
		fs.renameSync(
			path.resolve(cmpDir, 'Component.vue'),
			path.resolve(cmpDir, pascalName + '.vue')
		)
		fs.renameSync(
			path.resolve(cmpDir, 'Component.md'),
			path.resolve(cmpDir, pascalName + '.md')
		)
		fs.renameSync(
			cmpDir,
			path.resolve(cmpDir, '../', pascalName)
		)
		fs.renameSync(
			path.resolve(testDir, 'specs/Component.spec.js'),
			path.resolve(testDir, 'specs/' + pascalName + '.spec.js')
		)

		logger.log("To get started:")
		if (!data.inPlace) logger.log("cd " + data.destDirName)

		const logFiles = {
			component: path.relative(
				data.destDirName,
				path.resolve(data.destDirName, 'src', pascalName, pascalName + '.vue')
			),
			componentDoc: path.relative(
				data.destDirName,
				path.resolve(data.destDirName, 'src', pascalName, pascalName + '.md')
			),
			usage: path.relative(
				data.destDirName,
				path.resolve(data.destDirName, 'docs/*.md')
			)
		}
		logger.log("1. Install dependencies: npm install")
		logger.log("2. Write your component in " + logFiles.component)
		logger.log(
			"3. Write the component doc in " +
			logFiles.componentDoc +
			' or in the component itself using jsdoc'
		)
		logger.log("4. Write the demo and usage instructions in " + logFiles.usage)
		logger.log("5. Access demo and docs with npm run serve")
		logger.log("6. Build with: npm run build")
		logger.log("7. Build docs with: npm run build:doc")
	}
}
