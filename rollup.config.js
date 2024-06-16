import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import url from '@rollup/plugin-url';

export default defineConfig({
    input: 'src/index.ts',
    output: [
        {
            format: 'cjs',
            dir: 'dist',
            entryFileNames: '[name].js',
            chunkFileNames: '[name]-[hash].js'
        },
        {
            format: 'esm',
            dir: 'dist',
            entryFileNames: '[name].esm.js',
            chunkFileNames: '[name]-[hash].esm.js'
        }
    ],
    external: ['react', 'react-dom'],
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        postcss({
            extract: 'index.css',
            plugins: [
                tailwindcss({ config: './src/tailwind.config.js' }),
                autoprefixer,
            ],
            extensions: ['.css'],
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
