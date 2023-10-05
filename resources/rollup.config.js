import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';

const pkg = JSON.parse(
  require('fs').readFileSync(
    require('path').resolve('./package.json'),
    'utf-8',
  ),
);

const external = Object.keys(pkg.dependencies || {});

export default {
  input: './App.tsx',
  output: [
    {
      file: '../web/com.etendorx.subapp.base/subappexample.js',
      format: 'cjs',
      exports: 'auto',
      strict: false,
      sourcemap: 'inline',
    },
   
  ],
  plugins: [
    peerDepsExternal(),
    json({compact: true}),
    typescript(),
    image({
      extensions: /\.(png|jpg|jpeg|gif|svg)$/,
      limit: 10000,
      output: '../web/com.etendorx.subapp.base/images',
    }),
  ],
  external,
};

