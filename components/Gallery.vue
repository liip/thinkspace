<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
    <div v-for="image in images" :key="image.picture" :class="image.class">
      <Picture
        :sources="getSourcesForPicture(image.picture, image.sizes)"
        :img="{
          src: `/images/thumbs/${image.picture}-lg.jpg`,
          class: 'w-full h-full object-cover rounded-xl shadow-lg',
          loading: 'lazy',
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    images() {
      return [
        {
          picture: 'lounge',
          class: 'sm:col-span-1 sm:row-span-2',
          sizes:
            '(min-width: 1280px) 384px, (min-width: 1024px) 299px, (min-width: 768px) 340px, (min-width: 640px) 292px, 100vw',
        },
        {
          picture: 'east',
          class: 'sm:col-span-1 sm:row-span-1',
          sizes:
            '(min-width: 1280px) 384px, (min-width: 1024px) 299px, (min-width: 768px) 340px, (min-width: 640px) 292px, 100vw',
        },
        {
          picture: 'west',
          class: 'sm:col-span-1 sm:row-span-2',
          sizes:
            '(min-width: 1280px) 900px, (min-width: 1024px) 704px, (min-width: 768px) 680px, (min-width: 640px) 584px, 100vw',
        },
        {
          picture: 'south',
          class: 'sm:col-span-1 sm:row-span-1',
          sizes:
            '(min-width: 1280px) 384px, (min-width: 1024px) 299px, (min-width: 768px) 340px, (min-width: 640px) 292px, 100vw',
        },
        {
          picture: 'north',
          class: 'sm:col-span-1 sm:row-span-1 lg:row-span-2',
          sizes:
            '(min-width: 1280px) 900px, (min-width: 1024px) 704px, (min-width: 768px) 340px, (min-width: 640px) 292px, 100vw',
        },
        {
          picture: 'terrace',
          class: 'sm:col-span-1 lg:col-span-2 sm:row-span-1 lg:row-span-2',
          sizes:
            '(min-width: 1280px) 800px, (min-width: 1024px) 629px, (min-width: 768px) 340px, (min-width: 640px) 292px, 100vw',
        },
      ];
    },
  },

  methods: {
    getSourcesForPicture(picture, sizes) {
      return ['webp', 'jpg'].map((type) => ({
        srcset: `/images/thumbs/${picture}-xl.${type} 1200w, /images/thumbs/${picture}-lg.${type} 1000w, /images/thumbs/${picture}-md.${type} 800w, /images/thumbs/${picture}-sm.${type} 600w, /images/thumbs/${picture}-xs.${type} 400w`,
        type: `image/${type}`,
        sizes,
      }));
    },
  },
};
</script>
