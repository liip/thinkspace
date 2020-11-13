import Vue from 'vue';
import Chusho, { CBtn, CIcon } from 'chusho';

Vue.use(Chusho, {
  components: {
    btn: {
      defaultClass:
        'inline-block font-medium text-center whitespace-no-wrap transform transition-all duration-200 transition-ease-out',
      variants: {
        medium: 'px-8 py-3',
        secondary:
          'text-gray-700 hover:text-gray-600 focus:text-gray-600 bg-white rounded-lg shadow hover:shadow-md focus:shadow-md hover:-translate-y-1 focus:-translate-y-1',
      },
    },
    icon: {
      class: 'icon fill-current inline-block',
      spriteUrl: '/_nuxt/icons.svg',
    },
  },
});

Vue.component('CBtn', CBtn);
Vue.component('CIcon', CIcon);
