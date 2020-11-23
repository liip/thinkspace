<template>
  <div
    class="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 xl:gap-12"
  >
    <SpaceCard v-for="space in spaces" :key="space.slug" v-bind="space" />
  </div>
</template>

<script>
export default {
  props: {
    spaces: {
      type: Array,
      required: true,
    },
  },
};
</script>
