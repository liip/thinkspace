<template>
  <nuxt-link
    :to="localePath(`/spaces/${slug}`)"
    class="overflow-hidden bg-white rounded-xl shadow-lg flex flex-col transform transition-all duration-200 transition-ease-out hover:shadow-xl hover:-translate-y-1"
  >
    <img
      :src="picture"
      loading="lazy"
      width="300"
      height="200"
      class="w-full"
      alt=""
    />
    <div class="p-4 xl:p-6 flex-grow flex flex-col">
      <div class="flex-grow">
        <div class="flex flex-wrap items-center mb-1">
          <h3 class="mr-auto mb-2">{{ title }}</h3>
          <div class="mb-2">
            <span
              class="inline-block px-4 py-1 text-sm font-medium rounded-full"
              :class="availabilityClass"
            >
              {{
                availability.status
                  ? availability.short
                  : $t('space.notAvailable.short')
              }}
            </span>
          </div>
        </div>
        <div class="text-gray-600">{{ excerpt }}</div>
      </div>
      <div class="mt-3">
        <span
          v-for="(price, i) in prices"
          :key="i"
          class="text-2xl font-bold text-green-600"
        >
          <span v-if="i !== 0" class="text-gray-600 font-normal">∕</span>
          {{ price }}
        </span>
        <span class="text-sm text-gray-600">
          {{ $t('space.price.currency') }}
          <abbr :title="$t('space.price.taxes.full')">{{
            $t('space.price.taxes.abbr')
          }}</abbr>
        </span>
      </div>
      <div class="flex space-x-4 mt-4">
        <div class="w-1/2">
          <CIcon id="people" class="text-gray-600 mr-2" />
          <i18n path="space.capacity" tag="span">
            <span class="font-bold">{{ capacity }}</span>
          </i18n>
        </div>
        <div class="w-1/2">
          <CIcon id="surface" class="text-gray-600 mr-2" />
          <span class="font-bold">{{ surface }}</span> m<sup>2</sup>
        </div>
      </div>
    </div>
    <div
      class="px-4 xl:px-6 py-3 xl:py-4 text-gray-600 border-t border-gray-300 bg-gray-100 text-center text-sm font-bold tracking-wide uppercase"
    >
      {{ $t('space.more') }}
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    prices: {
      type: Array,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    surface: {
      type: Number,
      required: true,
    },
    availability: {
      type: Object,
      required: true,
    },
  },

  computed: {
    availabilityClass() {
      return {
        'text-red-800 bg-red-200': !this.availability.status,
        'text-green-800 bg-green-200': this.availability.status,
      };
    },
  },
};
</script>
