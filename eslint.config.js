import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
	{
		ignores: ["dist", "node_modules", "coverage"],
	},

	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs["flat/recommended"],
	eslintConfigPrettier,

	{
		files: ["**/*.{js,ts,vue}"],

		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: [".vue"],
			},
		},

		rules: {
			"no-var": "error",
			"prefer-const": "error",
			"no-console": [
				"warn",
				{
					allow: ["warn", "error"],
				},
			],

			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
				},
			],

			"vue/block-order": [
				"error",
				{
					order: ["template", "script", "style"],
				},
			],

			"vue/multi-word-component-names": "off",

			"vue/define-props-declaration": ["error", "type-based"],
			"vue/define-emits-declaration": ["error", "type-based"],
			"vue/component-name-in-template-casing": [
				"error",
				"PascalCase",
				{
					registeredComponentsOnly: false,
				},
			],
			"vue/component-definition-name-casing": ["error", "PascalCase"],
			"vue/prop-name-casing": ["error", "camelCase"],
			"vue/custom-event-name-casing": ["error", "camelCase"],
		},
	},
];
