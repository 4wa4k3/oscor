<template>
  <div>
    <h1>{{ $t('pages.lead_adaptors') }}</h1>
    <div>
      <div v-for="product in products" :key="product.id">
        <h1>{{ product.name }}</h1>
        <h2>{{ $t(`${product.short_name}.short_description`) }}</h2>
        <nuxt-link
          :to="
            localePath({
              name: 'products-lead-adaptors-slug',
              params: { slug: product.slug }
            })
          "
          >{{ $t('view') }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/products/lead-adaptors',
      es: '/productos/adaptadores-de-sondas',
      de: '/produkte/leitungsadapter'
    }
  },
  computed: {
    products() {
      return this.$store.state.lead_adaptors.all
    }
  }
}
</script>
