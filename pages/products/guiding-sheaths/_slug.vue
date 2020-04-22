<template>
  <div>
    <h1>{{ product.name }}</h1>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/products/guiding-sheaths/:slug',
      es: '/productos/catéteres-de-guía/:slug',
      de: '/produkte/führungsscheiden/:slug'
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    product() {
      return this.$store.state.guiding_sheaths.all.find(
        (product) => product.slug === this.slug
      )
    }
  }
}
</script>
