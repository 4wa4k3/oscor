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
      en: '/products/accessories/:slug',
      es: '/productos/accesorios/:slug',
      de: '/produkte/zubehör/:slug'
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    product() {
      return this.$store.state.accessories.all.find(
        (product) => product.slug === this.slug
      )
    }
  }
}
</script>
