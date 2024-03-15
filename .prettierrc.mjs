/** @type {import("prettier").Config} */
export default {
	printWidth: 140,
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	bracketSpacing: true,
	proseWrap: 'always',
	bracketSameLine: false,
	semi: true,
	quoteProps: 'consistent',
	arrowParens: 'always',
	trailingComma: 'all',
	endOfLine: 'lf',

	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: ['*.json', '*.md'],
			options: {
				useTabs: false,
			},
		},
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
