module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    // 'plugin:vue/essential',
    'plugin:vue/recommended',
    "eslint:recommended"
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "vue/html-indent": [
      2, 4, {
        attribute: 1, baseIndent: 1, closeBracket: 0
      }
    ],
    "semi": ["error", "never"],
    "no-unused-vars": [
      2, {
        vars: 'all',
        args: 'none'
      }
    ]
  },
}


