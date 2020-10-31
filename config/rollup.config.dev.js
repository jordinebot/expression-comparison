import typescript from '@rollup/plugin-typescript';
import html from '@rollup/plugin-html';
import serve from 'rollup-plugin-serve';

export default {
	input: 'src/main.ts',
	output: {
		file: 'public/index.js',
		format: 'es'
	},
	plugins: [typescript(), html(), serve('public')]
};
