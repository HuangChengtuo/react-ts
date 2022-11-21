module.exports = {
  'extends': [
    'next',
    'plugin:@typescript-eslint/recommended'
  ],
  'rules': {
    'eol-last': 1,
    'eqeqeq': 2,
    'no-var': 2,
    'prefer-const': 2,
    'quotes': [1, 'single'],
    '@next/next/no-img-element': 0,
    '@typescript-eslint/member-delimiter-style': [1, {
      multiline: { delimiter: 'comma', requireLast: false },
      singleline: { delimiter: 'comma', requireLast: false }
    }],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0
  }
}
