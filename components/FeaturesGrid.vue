<template>
  <div
    class="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 md:gap-10 lg:gap-12"
  >
    <Feature v-for="(feature, i) in features" :key="i" v-bind="feature" />
  </div>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      required: true,
    },
  },
};
</script>
