import vituum from 'vituum'
import pug from '@vituum/vite-plugin-pug'
import pages from 'vituum/plugins/pages.js'
import imports from "vituum/plugins/imports.js";

export default {
    plugins: [
        vituum(),
        pug({root: './resources'}),
        imports({
            paths: ['./resources/styles/*/**', './resources/scripts/*/**', './resources/assets/*/**']
        }),
        pages({dir: './resources/templates/pages', root: './resources'},),
    ],
    build: {
        rollupOptions: {
            input: [
                './resources/templates/pages/*.{pug,html}',
                './resources/styles/*.{css,scss,sass}',
                './resources/scripts/**/*.{js,ts}',
            ],
            output: {
                chunkFileNames: 'resources/scripts/[name].js',
                entryFileNames: 'resources/scripts/[name].js',
            },

        }
    },
}