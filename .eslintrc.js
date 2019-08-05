module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: 'airbnb',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'linebreak-style': [false],
        'import/no-unresolved': [false],
        'import/no-cycle': [false],
        'no-namespace': [false],
        'react-hooks/exhaustive-deps': [false],
    },
};
