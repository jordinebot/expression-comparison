import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from '@rollup/plugin-replace';
import template from './html-template';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
	input: 'src/main.tsx',
	output: {
		file: 'public/index.js',
		format: 'es'
	},
	plugins: [
		resolve({ extensions, browser: true }),
		replace({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		typescript(),
		commonjs(),
		html({ template }),

		serve('public'),
		livereload()
	]
};
