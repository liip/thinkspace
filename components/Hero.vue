<template>
  <section class="grid md:grid-cols-3 bg-green-100">
    <div class="media relative md:col-span-2">
      <Picture
        :sources="sources"
        :img="{
          src: `/images/thumbs/${picture}-xl.jpg`,
          class: 'object-cover w-full h-full',
        }"
      />
    </div>

    <div
      class="relative self-center -mt-16 sm:-mt-24 md:mt-0 md:-ml-32 lg:-ml-48 xl:-ml-64 py-8 sm:py-10 md:py-12 lg:py-20 xl:py-24"
    >
      <div class="container md:max-w-xl md:px-10 lg:px-12">
        <nuxt-link
          :to="localePath('/')"
          class="inline-block transition-opacity ease-out duration-200 hover:opacity-75 focus:opacity-75"
          :title="$t('nav.home')"
        >
          <img class="h-12 sm:h-16 w-auto mb-4" src="/logo.svg" alt="" />
        </nuxt-link>

        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      required: true,
    },
  },

  computed: {
    sources() {
      return ['webp', 'jpg'].map((type) => {
        return {
          srcset: `/images/thumbs/${this.picture}-xl.${type} 1200w, /images/thumbs/${this.picture}-lg.${type} 1000w, /images/thumbs/${this.picture}-md.${type} 800w, /images/thumbs/${this.picture}-sm.${type} 600w, /images/thumbs/${this.picture}-xs.${type} 400w`,
          type: `image/${type}`,
          sizes: '(min-width: 768px) 66vw, 100vw',
        };
      });
    },
  },
};
</script>

<style scoped>
.media {
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 25%,
      theme('colors.green.100')
    );

    @screen md {
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 25%,
        theme('colors.green.100')
      );
    }
  }
}
</style>
