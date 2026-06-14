import type { Config } from "prettier";

const config: Config = {
	semi: true,
	singleQuote: false,
	trailingComma: "all",
	printWidth: 80,
	tabWidth: 4,
	useTabs: true,
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: "always",
	endOfLine: "lf",
	vueIndentScriptAndStyle: true,
	htmlWhitespaceSensitivity: "css",
	singleAttributePerLine: true,
};

export default config;
