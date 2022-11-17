module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
  },
  extends: [ 
    'eslint:recommended',
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [
    {
      files: [
        "*.js", 
        "*.jsx",
      ],
      rules: {
        "no-useless-escape": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: [
      './tsconfig.json',
      './tsconfig.eslint.json',
    ],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
  ],
  root: true,
  rules: {
    "comma-dangle": "off",
    '@typescript-eslint/comma-dangle': [
      'warn', 
      {
        arrays: 'always',
        objects: 'always',
        imports: 'only-multiline',
        exports: 'always',
        functions: 'never',
      },
    ],
  },
}
