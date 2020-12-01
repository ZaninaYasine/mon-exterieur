module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:jest/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jest", "prettier"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "no-nested-ternary": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": [
      "warn",
      { allowShortCircuit: true, allowTernary: true },
    ],
    "react-hooks/exhaustive-deps": "off" /* to enable it later */,
    "import/no-cycle": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "no-prototype-builtins": "off",
    "no-plusplus": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/prop-types": "off",
    "@typescript-eslint/camelcase": "off",
    "linebreak-style": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: "either",
        depth: 25,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
