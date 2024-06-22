import eslintPlugin from '@eslint/js';
import jestEslintPlugin from 'eslint-plugin-jest';
import typescriptEslint from 'typescript-eslint';

export default [
    { ignores: ['node_modules', 'dist', '.nx', '.vscode'] },
    { plugins: { '@typescript-eslint': typescriptEslint.plugin } },

    // Parser for Typescript files
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: typescriptEslint.parser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },

    // Eslint
    eslintPlugin.configs.recommended,

    // Typescript eslint
    ...typescriptEslint.configs.strictTypeChecked.map((config) => ({ files: ['**/*.ts'], ...config })),

    // Jest
    {
        files: ['**/*.spec.ts'],
        ...jestEslintPlugin.configs['flat/all'],
    },

    // Custom configuration
    {
        files: ['**/*.ts'],
        rules: {
            camelcase: 'error',
            curly: 'error',
            eqeqeq: 'error',
            radix: 'error',
            complexity: ['error', 20],
            'max-depth': ['error', 4],
            'max-params': ['error', 8],
            'no-console': 'error',
            'no-implicit-coercion': 'error',
            'no-else-return': ['error', { allowElseIf: false }],
            'object-shorthand': ['error', 'always'],
            'no-magic-numbers': ['error', { ignore: [0, 1] }],
            '@typescript-eslint/no-extraneous-class': ['error', { allowEmpty: true }],
            '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
        },
    },
];
