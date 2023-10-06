import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  {
    input: 'src/index.ts',
    output: {
      format: 'umd',
      file: 'umd/micro-frontend-react-ui.js',
      name: 'microFrontendReactUi',
      esModule: false,
      sourcemap: true,
      globals: {
        '@emotion/react': 'EmotionReact',
        '@emotion/styled': 'Styled',
        '@emotion/cache': 'createCache',
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          outDir: 'umd',
        },
      }),
      terser(),
    ],
    external: [
      '@emotion/react',
      '@emotion/styled',
      '@emotion/cache',
      'react',
      'react-dom',
    ],
  },
  {
    input: {
      index: 'src/index.ts',
      button: 'src/Button/index.tsx',
      styleProvider: 'src/StyleProvider/index.tsx',
      useTheme: 'src/useTheme/index.tsx',
    },
    output: {
      format: 'es',
      dir: 'es',
      exports: 'named',
      sourcemap: true,
      entryFileNames: (chunkinfo) => {
        if (chunkinfo.name === 'index') return '[name].js';
        return '[name]/index.js';
      },
      chunkFileNames: (chunkinfo) => {
        if (chunkinfo.name === 'index') return '[name].js';
        return '[name]/[name].js';
      },
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          outDir: 'es',
        },
      }),
      terser(),
    ],
    external: [
      '@emotion/react',
      '@emotion/styled',
      '@emotion/cache',
      'react',
      'react-dom',
    ],
  },
  {
    input: {
      index: 'src/index.ts',
      button: 'src/Button/index.tsx',
      styleProvider: 'src/StyleProvider/index.tsx',
      useTheme: 'src/useTheme/index.tsx',
    },
    output: {
      format: 'cjs',
      dir: 'cjs',
      exports: 'named',
      sourcemap: true,
      entryFileNames: (chunkinfo) => {
        if (chunkinfo.name === 'index') return '[name].js';
        return '[name]/index.js';
      },
      chunkFileNames: (chunkinfo) => {
        if (chunkinfo.name === 'index') return '[name].js';
        return '[name]/[name].js';
      },
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          outDir: 'cjs',
        },
      }),
      terser(),
    ],
    external: [
      '@emotion/react',
      '@emotion/styled',
      '@emotion/cache',
      'react',
      'react-dom',
    ],
  },
];
