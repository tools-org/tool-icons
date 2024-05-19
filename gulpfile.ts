import { parallel, series } from 'gulp';
import {
  adjustViewBox,
  assignAttrsAtTag,
} from './scripts/plugins/svg2Definition/transforms';
import { generalConfig } from './scripts/plugins/svgo/presets';
import {
  clean,
  copy,
  generateEntry,
  generateIcons,
} from './scripts/tasks/creators';
// import { twotoneStringify } from './scripts/plugins/svg2Definition/stringify';

import { readFileSync } from 'fs';
import { resolve } from 'path';
import { getIdentifier } from './scripts/utils';
// import { IconDefinition } from './scripts/templates/types';
// import { ExtractRegExp } from './scripts/tasks/creators/generateInline';

const iconTemplate = readFileSync(
  resolve(__dirname, './scripts/templates/icon.ts.ejs'),
  'utf8',
);

export default series(
  // 1. clean
  clean(['src/defines']),

  parallel(
    // 2.1 copy helpers.ts, types.ts
    copy({
      from: ['scripts/templates/*.ts'],
      toDir: 'src/defines',
    }),
    // 2.2 generate abstract node with the theme "filled"
    generateIcons({
      theme: 'filled',
      from: ['src/svgs/*.svg'],
      toDir: 'src/defines/asn',
      svgoConfig: generalConfig,
      extraNodeTransformFactories: [
        assignAttrsAtTag('svg', { focusable: 'false' }),
        adjustViewBox,
      ],
      stringify: JSON.stringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'Outlined' }),
        content,
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'Outlined' }),
    }),
    parallel(
      // 3.1 generate entry file: src/index.ts
      generateEntry({
        entryName: 'index.ts',
        from: ['src/defines/asn/*.ts'],
        toDir: 'src/defines',
        banner: '// This index.ts file is generated automatically.\n',
        template: `export { default as <%= identifier %> } from '<%= path %>';`,
        mapToInterpolate: ({ name: identifier }) => {
          return {
            identifier,
            path: `./asn/${identifier}`,
          };
        },
      }),
    ),
  ),
);
