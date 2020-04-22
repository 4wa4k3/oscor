<template>
  <div>
    <h1>{{ product.name }}</h1>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/products/introducers/:slug',
      es: '/productos/introductores/:slug',
      de: '/produkte/einführer/:slug'
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    product() {
      return this.$store.state.introducers.all.find(
        (product) => product.slug === this.slug
      )
    }
  }
}
</script>
