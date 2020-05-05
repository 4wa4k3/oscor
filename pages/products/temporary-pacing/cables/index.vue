<template>
  <div>
    <h1>{{ $t('pages.cables') }}</h1>
    <div>
      <div v-for="product in products" :key="product.id">
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
        <nuxt-link
          :to="
            localePath({
              name: 'products-temporary-pacing-cables-slug',
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
      en: '/products/temporary-pacing/cables',
      es: '/productos/estimulacíon-temporal/cables',
      de: '/produkte/vorübergehende-stimulation/kabel'
    }
  },
  computed: {
    products() {
      return this.$store.state.cables.all
    }
  }
}
</script>
