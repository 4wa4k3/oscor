<template>
  <div>
    <h1>{{ $t('pages.pacemakers') }}</h1>
    <div>
      <div v-for="product in products" :key="product.id">
        <h1>{{ product.name }}</h1>
        <h2>
          {{ $t(`${product.short_name}.short_description`) }}
        </h2>
        <nuxt-link
          :to="
            localePath({
              name: 'products-temporary-pacing-pacemakers-slug',
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
      en: '/products/temporary-pacing/pacemakers',
      es: '/productos/estimulacíon-temporal/marcapasos',
      de: '/produkte/vorübergehende-stimulation/herzschrittmacher'
    }
  },
  computed: {
    products() {
      return this.$store.state.pacemakers.all
    }
  }
}
</script>
