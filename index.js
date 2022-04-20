// eslint-disable-next-line unicorn/prefer-module
module.exports = {

    env: {
        es2021: true,
        node: true
    },

    parserOptions: {
        ecmaVersion: `latest`,
        sourceType: `module`
    },

    extends: [
        `eslint:recommended`,
        `plugin:unicorn/recommended`,
        `plugin:jsdoc/recommended`,
        `airbnb-base`
    ],

    plugins: [
        `unicorn`,
        `jsdoc`
    ],

    rules: {
        "no-unused-vars": `error`,
        "no-redeclare": `off`,
        quotes: [
            `error`,
            `backtick`
        ],
        camelcase: [
            `error`,
            {
                properties: `always`
            }
        ],
        indent: [
            `error`,
            4,
            {
                SwitchCase: 1
            }
        ],
        "max-len": [
            `error`,
            {
                code: 160,
                ignoreUrls: true,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],
        "no-console": `off`,
        "no-restricted-syntax": [
            `error`,
            {
                selector: `CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]`,
                message: `Unexpected property on console object was called`
            }
        ],
        "brace-style": [
            `error`,
            `allman`,
            {
                allowSingleLine: true
            }
        ],
        "template-curly-spacing": [
            `error`,
            `always`
        ],
        "no-use-before-define": `off`,
        "comma-dangle": `off`,
        "consistent-return": `off`,
        curly: [
            `error`,
            `multi-or-nest`
        ],
        "nonblock-statement-body-position": `off`,
        "vars-on-top": `off`,
        "no-plusplus": [
            `error`,
            {
                allowForLoopAfterthoughts: true
            }
        ],
        "no-await-in-loop": `off`,
        "no-shadow": `off`,
        "no-var": `off`,
        "no-loop-func": `off`,
        "func-names": `off`,
        "prefer-destructuring": `off`,
        "block-scoped-var": `off`,
        "no-param-reassign": `off`,
        "no-multiple-empty-lines": [
            `error`,
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 1
            }
        ],
        "padded-blocks": [
            `error`,
            `never`
        ],
        "default-case": `off`,
        "import/extensions": [
            `error`,
            `ignorePackages`,
            {
                js: `always`
            }
        ],
        "import/no-unresolved": `off`,
        "unicorn/no-process-exit": `off`,
        "unicorn/filename-case": `off`
    },
};
