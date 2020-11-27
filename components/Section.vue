<template>
  <section class="section py-8 md:py-10 lg:py-12 xl:py-20">
    <div class="container space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
      <header v-if="title || body" class="max-w-3xl mx-auto sm:text-center">
        <h2 v-if="title" class="mb-3">
          {{ title }}
        </h2>
        <p v-if="body" class="text-lg text-gray-600">{{ body }}</p>
      </header>

      <div v-if="$slots.default">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    body: {
      type: String,
      default: null,
    },
  },
};
</script>
