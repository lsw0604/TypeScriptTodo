module.exports = {
  env: {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "node": true,
    "es6": true
  },
  extends: ["eslint:recommended", "prettier"],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parserOptions: {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off"
  }
}