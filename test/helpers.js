const chai = require('chai')
global.expect = chai.expect
const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const babelResult = babel.transformFileSync(
	path.resolve(__dirname, '..', 'main.js'), {
	presets: ['env']
}
);

const src = babelResult.code

jsdom({
	html,
	src
});
