import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import url from '@rollup/plugin-url';

export default defineConfig({
    input: 'src/index.ts',
    output: {
        format: 'esm',
        dir: 'dist',
        name: 'palestine-support-kit',
    },
    external: ['react', 'react-dom'],
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        postcss({
            extract: true,
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
