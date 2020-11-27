import path from 'path';
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin';

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} · ThinkSpace` : 'ThinkSpace';
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    htmlAttrs: {
      class: 'antialiased text-gray-800',
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/chusho.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'nuxt-i18n',
      {
        seo: true,
        baseUrl: 'https://thinkspace.ch',
      },
    ],
  ],

  i18n: {
    locales: [
      {
        code: 'fr',
        file: 'fr.js',
        iso: 'fr-CH',
      },
      {
        code: 'en',
        file: 'en.js',
        iso: 'en-US',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'fr',
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config) {
      const imageLoaderRule = config.module.rules.find(
        (rule) => rule.test && rule.test.test('.svg')
      );
      imageLoaderRule.exclude = path.resolve('./assets/icons');

      config.module.rules.push({
        test: /\.svg$/,
        include: path.resolve('./assets/icons'),
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'icons.svg',
        },
      });
    },
    plugins: [new SpriteLoaderPlugin()],
  },

  server: {
    host: '0.0.0.0',
  },
};
