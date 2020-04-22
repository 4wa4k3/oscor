<template>
  <div>
    <h1>{{ $t('guiding_sheaths') }}</h1>
    <div>
      <div v-for="product in products" :key="product.id">
        <h1>{{ product.name }}</h1>
        <nuxt-link
          :to="
            localePath({
              name: 'products-guiding-sheaths-slug',
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
      en: '/products/guiding-sheaths',
      es: '/productos/catéteres-de-guía',
      de: '/produkte/führungsscheiden'
    }
  },
  computed: {
    products() {
      return this.$store.state.guiding_sheaths.all
    }
  }
}
</script>
