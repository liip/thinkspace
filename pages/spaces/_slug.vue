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

    <Hero :picture="space.picture" class="relative">
      <h1>{{ space.title }}</h1>
      <p v-if="space.excerpt" class="mt-2 text-lg sm:text-xl text-gray-600">
        {{ space.excerpt }}
      </p>

      <div class="mt-3">
        <span
          v-for="(price, i) in space.prices"
          :key="i"
          class="text-3xl lg:text-4xl font-bold text-green-600"
        >
          <span v-if="i !== 0" class="text-green-400 font-normal">∕</span>
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

    <div class="bg-gray-200">
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
            <h2 class="h4 mb-3">Plan</h2>
            <FloorPlan :spaces="spaces" :highlight="space.slug" />
          </div>

          <div
            class="md:col-span-1 grid sm:grid-cols-2 md:grid-cols-1 content-start gap-6 md:gap-8 lg:gap-12"
          >
            <div>
              <h2 class="h4 mb-3">{{ $t('space.furnitures.main') }}</h2>
              <ul class="checklist space-y-2 text-gray-700">
                <li v-for="(furniture, i) in space.furnitures" :key="i">
                  {{ furniture }}
                </li>
              </ul>
            </div>

            <div>
              <h2 class="h4 mb-3">{{ $t('space.furnitures.others') }}</h2>
              <ul class="checklist space-y-2 text-gray-700 mb-3">
                <li v-for="(feature, i) in page.features" :key="i">
                  {{ feature }}
                </li>
              </ul>
              <nuxt-link
                :to="`${localePath('/')}#advantages`"
                class="text-green-600 font-medium hover:text-green-500 focus:text-green-500"
                >{{ $t('space.features.all') }} →</nuxt-link
              >
            </div>
          </div>
        </div>
      </Section>
    </div>
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

<style>
.checklist > li {
  @apply pl-8;

  background-image: url('data:image/svg+xml;utf8,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m9.001%2019.001c-.134%200-.259-.052-.354-.147l-5-5c-.195-.195-.195-.512%200-.707.094-.094.22-.146.354-.146s.259.052.354.146l4.606%204.606%2014.151-17.566c.096-.119.238-.186.39-.186.114%200%20.225.039.313.111.104.084.169.203.183.336s-.024.263-.108.367l-14.5%2018c-.088.11-.22.178-.361.185-.005.001-.023.001-.028.001z%22%20fill%3D%22%23718096%22%2F%3E%3Cpath%20d%3D%22m9.488%2023.99c-1.775%200-3.516-.505-5.035-1.459-2.147-1.35-3.639-3.455-4.203-5.927-1.163-5.104%202.043-10.202%207.146-11.366.688-.157%201.396-.236%202.104-.236%201.461%200%202.921.341%204.223.987.12.059.209.162.252.288.043.127.033.262-.026.382-.084.171-.256.278-.448.278-.077%200-.154-.018-.222-.052-1.165-.578-2.471-.883-3.778-.883-.634%200-1.267.071-1.882.212-4.566%201.041-7.434%205.602-6.393%2010.168.504%202.212%201.839%204.095%203.76%205.302%201.359.854%202.917%201.306%204.504%201.306.636%200%201.277-.073%201.904-.215%202.212-.504%204.095-1.84%205.302-3.76%201.208-1.921%201.595-4.196%201.091-6.408-.03-.13-.007-.265.064-.378s.182-.192.312-.221c.035-.008.074-.013.113-.013.233%200%20.433.16.485.389.564%202.473.131%205.017-1.219%207.163-1.35%202.147-3.454%203.639-5.927%204.203-.7.159-1.416.24-2.127.24z%22%20fill%3D%22%23CBD5E0%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 18px 18px;
}
</style>
