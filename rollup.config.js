import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  {
    input: 'src/index.ts',
    output: {
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      dir: 'dist/cjs',
      interop: 'auto', // fix `typeError: XXX is not a function` in jest env.
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          outDir: 'dist/cjs',
        },
      }),
      terser(),
    ],
    external: ['@emotion/react', '@emotion/styled', 'react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: {
      format: 'es',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      dir: 'dist/es',
      interop: 'auto', // fix `typeError: XXX is not a function` in jest env.
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          outDir: 'dist/es',
        },
      }),
      terser(),
    ],
    external: ['@emotion/react', '@emotion/styled', 'react', 'react-dom'],
  },
];
