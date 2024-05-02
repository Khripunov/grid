/* eslint-env node */

module.exports = {
    env: {browser: true, es2022: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {ecmaVersion: 'latest', sourceType: 'module', project: 'tsconfig.json'},
    settings: {react: {version: 'detect'}},
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'semi': 'error',
        'no-console': 'error',
        'no-alert': 'error',
        'quotes': [2, 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}]
    },
    overrides: [
        {
            files: ['*test*'],
            rules: {'@typescript-eslint/unbound-method': 'off'}
        },
    ]
}
