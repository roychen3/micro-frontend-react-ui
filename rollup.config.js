import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'umd',
        sourcemap: true,
        name: 'MicroFrontendReactUI',
        file: packageJson.main,
        // interop: 'auto', // fix `typeError: XXX is not a function` in jest env.
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
    external: ['@emotion/react', '@emotion/styled', 'react', 'react-dom'],
  },
];
