module.exports = {
//   "parser": "@babel/eslint-parser",
    
  env: {
     browser: true, 
    es2020: true,
    node: true,
    "amd": true,
   },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-mixed-spaces-and-tabs': 'off',
    'prop-types': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    // 'no-undef': 'off',
    // 'react/prop-types': 'off',
  },
}