module.exports = {
    root: true,
    extends: '@react-native-community',

    'env': {
        'es6': true,
        'node': true,
        'jasmine': true,
    },
    'extends': 'eslint:recommended',
    'parserOptions': {},
    'rules': {
        'no-else-return': 'error',
        'no-multi-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'camelcase': 'error',
        'new-cap': 'error',
        'no-console': 'error',
        'comma-dangle': 'error',
        'no-var': 'error',
        'indent': ['error', 4, {'SwitchCase': 1}],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
    }
};
