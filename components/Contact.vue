<template>
  <div class="container max-w-6xl mt-4">
    <div
      class="p-6 lg:p-8 xl:p-10 relative rounded-lg lg:rounded-xl shadow-lg lg:shadow-xl md:flex items-center"
      :class="`bg-${color}-500`"
    >
      <div class="mb-4 md:mb-0 md:mr-12 md:flex-1">
        <h2 class="text-white mb-3">{{ title }}</h2>
        <p v-if="body" class="text-medium" :class="`text-${color}-100`">
          {{ body }}
        </p>
      </div>
      <CBtn
        href="mailto:hello@thinkspace.ch"
        variant="medium secondary"
        class="w-full md:w-auto"
      >
        <CIcon id="email" :scale="1.5" class="-my-1 mr-3" />
        {{ $t('contact.button.label') }}
      </CBtn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'green',
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      default: null,
    },
  },
};
</script>
