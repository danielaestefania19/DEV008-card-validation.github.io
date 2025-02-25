module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "globals": {
        "module": true,
        "require": true,
        "describe": true,
        "test": true,
        "expect": true
    },
    "settings": {
        "react": {
          "version": "detect"
        }
    }  
}
