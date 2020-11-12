<template>
  <div class="feature flex">
    <CIcon :id="icon" :scale="2" class="mr-6 flex-shrink-0 text-green-600" />
    <div class="flex-grow-1">
      <h3 class="mb-2">
        {{ title }}
      </h3>
      <p class="text-gray-600">{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
};
</script>
