module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed in projects using React 17+
    'react/prop-types': 'off', // Disable prop-types rule if you're using TypeScript
    quotes: ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
