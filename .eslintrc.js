module.exports = {
    "extends": "airbnb",
    "rules": {
        "max-len": [1, 160, 2],
        "no-underscore-dangle": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": [0, { "ignorePureComponents": true }]
    }
};
