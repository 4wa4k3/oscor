<template>
  <div>
    <h1>{{ $t('pages.temporary_pacing') }}</h1>
    <div>
      <div v-for="product in products" :key="product.id">
        <h1>{{ product.name }}</h1>
        <h2 v-if="product.category == 'pacemakers'">
          {{ $t(`${product.short_name}.short_description`) }}
        </h2>
        <h2 v-else-if="product.category == 'cables'">
          {{ $t(`${product.short_name}.usable_length`) }}
        </h2>
        <nuxt-link
          :to="
            localePath({
              name: `products-temporary-pacing-${product.category}-slug`,
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
      en: '/products/temporary-pacing',
      es: '/productos/estimulacíon-temporal',
      de: '/produkte/vorübergehende-stimulation'
    }
  },
  computed: {
    products() {
      const cables = this.$store.state.cables.all
      const pacemakers = this.$store.state.pacemakers.all
      const products = [...pacemakers, ...cables]
      return products
    }
  }
}
</script>
