// @ts-check
import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://coffee-paradise.com',
    integrations: [
        mdx(),
        sitemap({
            filter: (page) =>
                page !== 'https://coffee-paradise.com/blog/5-methodes-d-extraction-du-cafe/' &&
                page !== 'https://coffee-paradise.com/blog/bien-moudre-son-cafe/' &&
                page !== 'https://coffee-paradise.com/blog/cafe-de-specialite-pourquoi-ca-change-tout/' &&
                page !== 'https://coffee-paradise.com/blog/choisir-son-cafe-en-grain/' &&
                page !== 'https://coffee-paradise.com/blog/meilleurs-torrefactions-artisanales-en-france/' &&
                page !== 'https://coffee-paradise.com/blog/sample-post-using-mdx/',
        }),
    ],
    redirects: {
        '/': '/blog',
    },
});
