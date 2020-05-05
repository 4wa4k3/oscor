<template>
  <div>
    <h1>{{ product.name }}</h1>
    <h2>{{ $t(`${product.short_name}.short_description`) }}</h2>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/products/lead-adaptors/:slug',
      es: '/productos/adaptadores-de-sondas/:slug',
      de: '/produkte/leitungsadapter/:slug'
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    product() {
      return this.$store.state.lead_adaptors.all.find(
        (product) => product.slug === this.slug
      )
    }
  }
}
</script>
