<template>
  <picture>
    <source
      v-for="source in sources"
      :key="source.media"
      :sizes="source.sizes"
      :type="source.type"
      :srcset="source.srcset"
    />
    <img v-bind="img" :alt="img.alt || ''" />
  </picture>
</template>

<script>
export default {
  props: {
    sources: {
      type: Array,
      required: true,
    },
    img: {
      type: Object,
      required: true,
    },
  },

  sources() {
    return ['webp', 'jpg'].map((type) => {
      return {
        srcset: `/images/thumbs/${this.picture}-xl.${type} 1200w, /images/thumbs/${this.picture}-lg.${type} 1000w, /images/thumbs/${this.picture}-md.${type} 800w, /images/thumbs/${this.picture}-sm.${type} 600w, /images/thumbs/${this.picture}-xs.${type} 400w`,
        type: `image/${type}`,
        sizes: '(min-width: 768px) 66vw, 100vw',
      };
    });
  },
};
</script>
