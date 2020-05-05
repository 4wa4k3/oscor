<template>
  <div>
    <h1>{{ product.name }}</h1>
    <h2>
      {{ $t(`${product.short_name}.short_description`) }}
    </h2>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/products/temporary-pacing/pacemakers/:slug',
      es: '/productos/estimulacíon-temporal/marcapasos/:slug',
      de: '/produkte/vorübergehende-stimulation/herzschrittmacher/:slug'
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    product() {
      return this.$store.state.pacemakers.all.find(
        (product) => product.slug === this.slug
      )
    }
  }
}
</script>
