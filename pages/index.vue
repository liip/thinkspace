<template>
  <div>
    <Hero picture="kitchen">
      <!-- eslint-disable vue/no-v-html -->
      <h1 v-html="page.hero.title" />
      <p
        v-if="page.hero.body"
        class="mt-3 text-lg sm:text-xl text-green-500 md:mt-5"
      >
        {{ page.hero.body }}
      </p>
    </Hero>

    <Section
      id="advantages"
      :title="page.features.title"
      :body="page.features.body"
    >
      <FeaturesGrid :features="page.features.items"></FeaturesGrid>
    </Section>

    <Contact v-bind="page.contact" class="-mb-24" />

    <div class="bg-gray-200 pt-24">
      <Section :title="page.spaces.title" :body="page.spaces.body">
        <SpacesGrid :spaces="spaces" />
      </Section>
    </div>

    <Section v-bind="page.gallery" class="bg-gray-700 text-white">
      <Gallery />
    </Section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const page = await $content(`${app.i18n.locale}/pages/home`).fetch();
    const spaces = await $content(`${app.i18n.locale}/spaces`).fetch();

    return {
      page,
      spaces,
    };
  },
};
</script>
