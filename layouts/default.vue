<template>
  <div class="min-h-screen flex flex-col">
    <div class="absolute top-0 right-0 z-10 mr-4">
      <nuxt-link
        :to="switchLocalePath(otherLocale.code)"
        class="inline-block px-4 py-2 md:py-3 md:px-5 text-sm leading-tight bg-white bg-opacity-50 hover:bg-opacity-75 focus:bg-opacity-75 rounded-b"
      >
        {{ otherLocale.label }}
      </nuxt-link>
    </div>

    <main class="flex-grow">
      <Nuxt />
    </main>

    <Footer />
  </div>
</template>

<script>
require.context('../assets/icons');

export default {
  computed: {
    otherLocale() {
      return this.$i18n.locale === 'fr'
        ? { code: 'en', label: 'English' }
        : { code: 'fr', label: 'Français' };
    },
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('meta.description'),
        },
      ],
    };
  },
};
</script>
