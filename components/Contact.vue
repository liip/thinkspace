<template>
  <div class="container max-w-6xl mt-4">
    <div
      class="p-6 lg:p-8 xl:p-10 relative md:flex items-center rounded-lg lg:rounded-xl shadow-lg lg:shadow-xl bg-gradient-to-br"
      :class="colors.bg"
    >
      <div class="mb-4 md:mb-0 md:mr-12 md:flex-1">
        <div class="h3 text-white mb-3">{{ title }}</div>
        <p v-if="body" class="text-medium" :class="colors.text">
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

  computed: {
    colors() {
      switch (this.color) {
        case 'red':
          return { bg: 'from-red-500 to-red-600', text: 'text-red-100' };
        case 'green':
        default:
          return { bg: 'from-green-500 to-green-600', text: 'text-green-100' };
      }
    },
  },
};
</script>
