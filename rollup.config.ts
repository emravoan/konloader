import { resolve } from 'path';
import scss from 'rollup-plugin-scss';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import type { RollupOptions } from 'rollup';

const config = () => {
  const root = resolve(__dirname, 'src/');
  const outDir = resolve(__dirname, 'dist');

  return [
    {
      input: resolve(root, 'bundle.ts'),
      output: [
        {
          file: resolve(outDir, 'bundle.js'),
          format: 'cjs',
          sourcemap: false,
          exports: 'default',
        },
        {
          file: resolve(outDir, 'bundle.esm.js'),
          format: 'es',
          sourcemap: false,
        },
      ],
      plugins: [
        del({ targets: outDir }),
        esbuild(),
        commonjs(),
        nodeResolve({ preferBuiltins: false }),
        scss({ output: false, insert: true }),
      ],
    },
    {
      input: resolve(root, 'bundle.ts'),
      output: {
        file: resolve(outDir, 'bundle.d.ts'),
        format: 'es',
      },
      plugins: [dts(), scss({ output: false })],
    },
  ] as RollupOptions[];
};

export default config;
