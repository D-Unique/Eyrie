export default {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',  // This integrates Prettier with ESLint
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
  };
  