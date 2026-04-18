const js = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  // Ignore patterns (replaces .eslintignore)
  {
    ignores: ['webpack.*.js', 'webpack.config.js', 'examples/**'],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript files
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        HTMLImageElement: 'readonly',
        HTMLCanvasElement: 'readonly',
        CanvasRenderingContext2D: 'readonly',
        ImageData: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // TypeScript recommended rules
      ...tsPlugin.configs['recommended'].rules,

      // Prettier
      ...prettierConfig.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          printWidth: 80,
        },
      ],

      // Project-specific rule overrides (matching .eslintrc)
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-return-assign': 0,
      'prefer-destructuring': 0,
      'lines-between-class-members': 0,
      '@typescript-eslint/no-explicit-any': 'warn',

      // Disable rules not applicable to this codebase
      'no-undef': 'off', // TypeScript handles this
    },
  },
];
