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
            plugins: [
                tailwindcss,
                autoprefixer,
            ],
            extensions: ['.css']
        }),
        url({
            include: ['**/*.png', '**/*.jpg', '**/*.svg'], // include image extensions
            limit: 0, // no limit, copy files as-is
            fileName: '[name][extname]', // maintain the original name
            destDir: 'dist/assets' // specify the output directory for assets
        }),
    ]
});
