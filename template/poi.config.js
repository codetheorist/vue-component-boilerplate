const presetKarma = require('poi-preset-karma')
const webpack = require('webpack')
const glob = require('glob').sync
const toPascal = require('to-pascal-case')
const pkg = require('./package.json')
const PascalName = toPascal(pkg.name)

module.exports = {
  entry: glob('./src/**/*.vue'),
  filename: {
    js: PascalName + '.min.js',
    css: PascalName + '.min.css',
  },
  sourceMap: true,
  html: false,
  presets: [
    presetKarma({
      files: ['./test/specs/**.spec.js'],
      browsers: ['PhantomJS'],
      frameworks: ['mocha', 'chai', 'phantomjs-shim'],
    })
  ],
  moduleName: PascalName
}
