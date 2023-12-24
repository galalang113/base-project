module.exports = {
	env: { es2020: true, node: true },
	extends: ["prettier"],
	parser: "@babel/eslint-parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		requireConfigFile: false,
		allowImportExportEverywhere: true,
	},
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": ["error"],
	},
};
