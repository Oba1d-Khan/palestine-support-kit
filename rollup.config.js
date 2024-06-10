import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    input: "src/index.ts",
    output: {
        format: "esm",
        dir: "dist",
        name: "palestine-support-kit",
    },
    external: ["react", "react-dom"],
    plugins: [
        typescript({ tsconfig: "./tsconfig.json" }),
        postcss({
            plugins: [
                tailwindcss,
                autoprefixer,
            ],
            extensions: ['.css']
        })
    ]
});
