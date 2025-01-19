module.exports = {
  extends: ['proste/reactTS', 'proste/vitest', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    warnOnUnsupportedTypeScriptVersion: true,
  },
};
