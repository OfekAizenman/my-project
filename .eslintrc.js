module.exports = {
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended"
  ],

  "env": {
    "browser": true
  },

  rules: {
    "linebreak-style": [
      "error",
      "windows"
    ],
    "jsx-quotes": [
      "error",
      "prefer-single"
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },

  "parser": "babel-eslint",

  "plugins": [
    "jsx-a11y",
    "flowtype",
  ]
};