import vituum from 'vituum'
import { fileURLToPath, URL } from 'node:url'
import pug from '@vituum/vite-plugin-pug'
import pages from 'vituum/plugins/pages.js'
import imports from "vituum/plugins/imports.js";

export default {
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    },
    base: './',
    plugins: [
        vituum(),
        pug({root: '/src',}),
        imports({
            filenamePattern: {
                'src/styles': '+.sass'
            },
            paths: ['/src/styles/*/**', '/src/scripts/*/**', '/src/assets/*/**'],
        }),
        pages({
            dir: './src/templates/pages',
            root: './src',
            normalizeBasePath: true
        },),
    ],
    assets: {
        fileExtensions: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'ico', 'webp', 'mp4', 'webm', 'ogg', 'mp3', 'wav', 'flac', 'aac', 'woff', 'woff2', 'eot', 'ttf'],
    },
    build: {
        minify: true,
        rollupOptions: {
            input: [
                './src/templates/pages/*.{pug,html}',
                './src/styles/*.{css,scss,sass}',
                './src/scripts/**/*.{js,ts}',
                './src/assets/**/*.{svg,png,jpeg,jpg,webp,webm,mp4,mp3,webp,webm,woof,woof2,ttf}',
            ],
            output: {
                chunkFileNames: 'scripts/[name].js',
                entryFileNames: 'scripts/[name].js',
                assetFileNames: ({name}) => {
                    if (/\.css$/.test(name ?? '')) {
                        return '[name][extname]';
                    }
                    if (/\.(webp|png|jpg|jpeg|gif|ico|svg)$/.test(name ?? '')) {
                        return 'assets/img/[name][extname]';
                    }
                    if (/\.(woff|woff2|ttf)$/.test(name ?? '')) {
                        return 'assets/fonts/[name][extname]';
                    }
                    return 'assets/[name][extname]'
                },
            }

        }
    },

}
