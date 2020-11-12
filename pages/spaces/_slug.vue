<template>
  <div class="relative">
    <div class="absolute top-0 left-0 z-10 mt-4">
      <nuxt-link
        :to="localePath('/')"
        class="inline-block py-1 px-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 focus:bg-opacity-75 rounded-r-full"
      >
        ← {{ $t('nav.home') }}
      </nuxt-link>
    </div>

    <Hero :picture="space.picture">
      <h1>{{ space.title }}</h1>
      <p v-if="space.excerpt" class="mt-2 text-lg sm:text-xl text-gray-600">
        {{ space.excerpt }}
      </p>

      <div class="mt-3">
        <span
          v-for="(price, i) in space.prices"
          :key="i"
          class="text-4xl font-bold text-green-600"
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

      <div class="flex space-x-8 mt-4 mb-24">
        <div>
          <CIcon id="people" class="text-gray-600 mr-2" />
          <i18n path="space.capacity" tag="span">
            <span class="font-bold">{{ space.capacity }}</span>
          </i18n>
        </div>
        <div>
          <CIcon id="surface" class="text-gray-600 mr-2" />
          <span class="font-bold">{{ space.surface }}</span> m<sup>2</sup>
        </div>
      </div>
    </Hero>

    <Contact
      :title="
        space.availability.status
          ? space.availability.long
          : $t('space.notAvailable.long')
      "
      :body="
        space.availability.status
          ? $t('space.available.body')
          : $t('space.notAvailable.body')
      "
      :color="!space.availability.status ? 'red' : undefined"
      class="-mt-24"
    />

    <Section>
      <div class="grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        <div class="md:col-span-2">
          <FloorPlan :spaces="spaces" :highlight="space.slug" />
        </div>

        <div
          class="md:col-span-1 grid sm:grid-cols-2 md:grid-cols-1 content-start gap-6 md:gap-8 lg:gap-12"
        >
          <div>
            <h3 class="mb-3">{{ $t('space.furnitures.main') }}</h3>
            <ul class="space-y-2 text-gray-600">
              <li v-for="(furniture, i) in space.furnitures" :key="i">
                {{ furniture }}
              </li>
            </ul>
          </div>

          <div>
            <h3 class="mb-3">{{ $t('space.furnitures.others') }}</h3>
            <ul class="space-y-2 text-gray-600">
              <li v-for="(feature, i) in page.features" :key="i">
                {{ feature }}
              </li>
              <li>
                <nuxt-link
                  :to="`${localePath('/')}#advantages`"
                  class="text-green-600 font-medium hover:text-green-500 focus:text-green-500"
                  >{{ $t('space.features.all') }} →</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app, params }) {
    const page = await $content(`${app.i18n.locale}/pages/space`).fetch();
    const spaces = await $content(`${app.i18n.locale}/spaces`).fetch();
    const space = await $content(
      `${app.i18n.locale}/spaces/${params.slug}`
    ).fetch();

    return {
      page,
      spaces,
      space,
    };
  },

  head() {
    return {
      title: this.space.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.space.excerpt,
        },
      ],
    };
  },
};
</script>
