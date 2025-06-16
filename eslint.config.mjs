import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    // ... otras configuraciones ...
    extends: [
      // ... otras configuraciones ...
      'plugin:prettier/recommended', // Habilita las reglas de Prettier
      prettier, // Desactiva reglas conflictivas de ESLint
    ],
    plugins: [
      'prettier', // Asegúrate de que el plugin esté incluido
    ],
    rules: {
      // ... otras reglas ...
      'prettier/prettier': 'error', // Asegura que Prettier reporte errores
    },
  },
];
