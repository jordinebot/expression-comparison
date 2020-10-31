import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/main.ts',
	output: {
		file: 'public/index.js',
		format: 'cjs'
	},
	plugins: [typescript()]
};
