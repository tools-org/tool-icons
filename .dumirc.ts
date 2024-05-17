import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@fett/icons',
  },
  resolve: {
    atomDirs: [
      {
        type: 'component',
        dir: 'src/icons',
      },
    ],
  },
});
