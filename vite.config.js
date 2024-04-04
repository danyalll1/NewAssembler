import vituum from 'vituum'
import { fileURLToPath, URL } from 'node:url'
import pug from '@vituum/vite-plugin-pug'
import pages from 'vituum/plugins/pages.js'
import imports from "vituum/plugins/imports.js";

export default {
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    base: './',
    plugins: [
        vituum(),
        pug({root: '/src',}),
        imports({
            paths: ['/src/styles/*/**', '/src/scripts/*/**', '/src/assets/*/**']
        }),
        pages({
            dir: './src/templates/pages',
            root: './src',
            normalizeBasePath: true
        },),
    ],
    build: {
        minify: true,
        rollupOptions: {
            input: [
                './src/templates/pages/*.{pug,html}',
                './src/styles/*.{css,scss,sass}',
                './src/scripts/**/*.{js,ts}',
                './src/assets/**/*.{svg,png,jpeg,jpg,webp,webm,mp4,mp3}'
            ],
            output: {
                chunkFileNames: 'src/scripts/[name].js',
                entryFileNames: 'src/scripts/[name].js',

            },

        }
    },
}