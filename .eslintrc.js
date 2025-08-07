module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/multi-word-component-names' : 'off',
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'comma-spacing': ['error', { before: false, after: true }],
    'eol-last': ['error', 'always'],
    "indent": ['error', 2],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'curly': 'all',
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'lines-around-comment': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-spaced-func': 'off',
    'no-trailing-spaces': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    'quotes': ['error', 'double', { avoidEscape: true }],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ]
    }
  ]
}
