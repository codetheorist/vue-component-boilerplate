# {{ pascalcase name }}

> {{ description }}

## Installation

### Using yarn

`yarn add {{ name }}`

### Using npm

`npm i --save {{ name }}`

## Demo and Docs

`npm run serve`

## Usage

### ES6 Modules / CommonJS

```js
import {{ pascalcase name }} from '{{ pascalcase name }}'
import '{{ pascalcase name }}/dist/{{ pascalcase name }}.min.css'

Vue.component('{{ name }}', {{ pascalcase name }})
```

```html
<{{name}} text="Hello World!"></{{name}}>
```

### UMD

```html
<{{name}} text="Hello World!"></{{name}}>

<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="./dist/umd/{{ pascalcase name }}.min.js" charset="utf-8"></script>
<link rel="stylesheet" type="text/css" href="./dist/umd/{{ pascalcase name }}.min.css">

<script type="text/javascript">
  Vue.component('{{ name }}', window.{{ pascalcase name }})
</script>
```

## Build

Build configuration is located in the `poi.config.js` file, to build just run: `npm run build`, it will build to `cjs` and `umd` directories.

## Tests

This template uses karma with chai by default, you can change test settings in poi.config.js

`npm run test`
`npm run test:watch`
`npm run test:cov`

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
