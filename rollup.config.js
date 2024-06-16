import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';

export default defineConfig({
    input: 'src/index.ts',
    output: [
        {
            format: 'esm',
            dir: 'dist',
            entryFileNames: '[name].js',
            chunkFileNames: '[name]-[hash].js',
        }
    ],
    external: ['react', 'react-dom'],
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        postcss({
            extract: 'index.css',
            minimize: true,
        }),
        url({
            include: ['**/*.png', '**/*.jpg', '**/*.svg'],
            limit: 0,
            fileName: '[name][extname]',
            destDir: 'dist/assets'
        }),
    ]
});
