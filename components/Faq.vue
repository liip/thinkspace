<template>
  <div class="xl:max-w-4xl mx-auto">
    <div v-for="(item, i) in items" :key="i">
      <hr v-if="i !== 0" class="my-5 md:my-6 lg:my-8" />
      <div class="sm:flex sm:space-x-8">
        <h3 class="sm:w-1/2 h4 leading-tight mb-3 sm:mb-0">
          {{ item.question }}
        </h3>
        <p class="sm:w-1/2 text-gray-700">{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
