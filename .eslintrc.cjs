const restrictedGlobals = require('confusing-browser-globals');

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: [
    'node_modules/',
    'build/',
    '.git/',
    '.husky/',
    '.next/',
    '.gitignore',
  ],
  env: { browser: true, es2021: true },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'plugin:tailwindcss/recommended',
    // 'next',
    'next/core-web-vitals',
    '@next/next/recommended',
  ],
  plugins: [
    'react',
    'prettier',
    'sonarjs',
    'filenames',
    'tailwindcss',
    '@next/next',
  ],
  settings: {
    'import/resolver': {
      node: { paths: ['./src'] },
    },
    react: { version: 'detect' },
  },
  rules: {
    'max-lines': [ERROR, 500], // TODO: change this to ERROR
    'react/jsx-sort-props': [
      WARN,
      {
        reservedFirst: true,
        shorthandFirst: true,
        callbacksLast: true,
      },
    ],
    'sort-imports': [
      ERROR,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      ERROR,
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'assets/*',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/function-component-definition': [
      ERROR,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    camelcase: [
      ERROR,
      {
        allow: [''],
        properties: 'never',
      },
    ],
    'class-methods-use-this': OFF,
    curly: ERROR,
    'func-names': OFF,
    'guard-for-in': OFF,
    'import/extensions': [
      ERROR,
      {
        '.js': 'always',
        '.jsx': 'always',
        '.ts': 'always',
        '.tsx': 'always',
        '.json': 'always',
      },
    ],
    'import/no-cycle': OFF, // re-enable up for discussion, might require some major refactors
    'import/prefer-default-export': OFF,
    indent: OFF,
    'jsx-a11y/anchor-is-valid': WARN,
    'jsx-a11y/click-events-have-key-events': OFF, // re-enable up for discussion
    'jsx-a11y/mouse-events-have-key-events': OFF, // re-enable up for discussion
    'new-cap': OFF,
    'no-bitwise': OFF,
    'no-continue': OFF,
    'no-mixed-operators': OFF,
    'no-multi-assign': OFF,
    'no-multi-spaces': OFF,
    'no-prototype-builtins': OFF,
    'no-restricted-properties': OFF,
    'padded-blocks': OFF,
    'prefer-arrow-callback': OFF,
    'prefer-object-spread': WARN,
    'prefer-destructuring': [ERROR, { object: true, array: false }],
    'react/destructuring-assignment': ERROR,
    'react/forbid-prop-types': OFF,
    'react/jsx-filename-extension': [WARN, { extensions: ['.js', '.jsx'] }],
    'react/jsx-fragments': WARN,
    'react/jsx-no-bind': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/no-array-index-key': OFF,
    'react/no-string-refs': OFF,
    'react/no-unescaped-entities': OFF,
    'react/no-unused-prop-types': OFF,
    'react/prop-types': OFF,
    'react/require-default-props': OFF,
    'prettier/prettier': [
      ERROR,
      {
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],
    'no-debugger': WARN,
    'padding-line-between-statements': [
      ERROR,
      {
        blankLine: 'always',
        prev: ['function', 'multiline-const', 'multiline-let'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['function', 'multiline-const', 'multiline-let', 'export'],
      },
    ],
    'no-template-curly-in-string': OFF, // as lot of libraries accept this kind of syntax
    'no-restricted-imports': [
      ERROR,
      {
        paths: [
          {
            name: 'axios',
            message: 'Please use axios from utils/axios',
          },
          {
            name: 'react',
            importNames: ['default'],
            message: 'No need to import "React" anymore.',
          },
        ],
        patterns: [
          {
            group: ['.*'],
            message: 'only absolute imports are allowed.',
          },
        ],
      },
    ],
    'no-console': WARN,
    'react/react-in-jsx-scope': OFF,
    'no-restricted-globals': [ERROR].concat(restrictedGlobals),
    'no-dupe-keys': ERROR,
    'no-unused-vars': [
      WARN,
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    'no-nested-ternary': ERROR,
    'no-shadow': ERROR,
    'no-var': ERROR,
    'no-param-reassign': ERROR,
    'no-eq-null': OFF,
    'no-plusplus': OFF,
    'react/no-unstable-nested-components': ERROR,
    'no-case-declarations': ERROR,
    'array-callback-return': ERROR,
    'filenames/match-exported': [ERROR, null, '\\.routes$|\\.Constants$'],
    // todo: following need to be revisited putting them as no errors for now
    'tailwindcss/no-custom-classname': OFF,
    'import/no-extraneous-dependencies': OFF,
    'consistent-return': OFF,
    'jsx-a11y/label-has-associated-control': OFF,
    complexity: OFF,
  },
};
