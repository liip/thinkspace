import Vue from 'vue';
import Chusho from 'chusho';

Vue.use(Chusho, {
  components: {
    btn: {
      defaultClass:
        'inline-block font-medium text-center whitespace-no-wrap transform transition-all duration-200 transition-ease-out',
      variants: {
        medium: 'px-8 py-3',
        large: 'px-10 py-4 text-xl',
        primary:
          'text-white bg-green-600 hover:bg-green-500 rounded-lg shadow hover:shadow-md hover:-translate-y-1',
        secondary:
          'text-gray-700 hover:text-gray-600 bg-white rounded-lg shadow hover:shadow-md hover:-translate-y-1',
        link:
          'text-green-600 hover:text-green-500 focus:text-green-500 font-bold uppercase tracking-wide transition-all duration-200 ease-out group',
      },
    },
    icon: {
      class: 'icon fill-current inline-block',
      spriteUrl: '/_nuxt/icons.svg',
    },
  },
});
