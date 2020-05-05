<template>
  <div>
    <h1>{{ product.name }}</h1>
    <div>
      <span>
        usable length:
        {{ $t(`${product.short_name}.usable_length`) }}
      </span>
      <span>
        proximal end:
        {{ $t(`${product.short_name}.proximal_end`) }}
      </span>
      <span>
        distal end:
        {{ $t(`${product.short_name}.distal_end`) }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/products/temporary-pacing/cables/:slug',
      es: '/productos/estimulacíon-temporal/cables/:slug',
      de: '/produkte/vorübergehende-stimulation/kabel/:slug'
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    product() {
      return this.$store.state.cables.all.find(
        (product) => product.slug === this.slug
      )
    }
  }
}
</script>
