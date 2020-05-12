<template>
  <div>
    <section class="section-small section-hero">
      <div class="content-wrap">
        <h1 class="hero-title">{{ $t('pages.introducers') }}</h1>
      </div>
    </section>
    <section>
      <div class="content-wrap card-flex">
        <Card
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </div>
</template>

<script>
import Card from '~/components/Card'
export default {
  nuxtI18n: {
    paths: {
      en: '/products/introducers',
      es: '/productos/introductores',
      de: '/produkte/einführer'
    }
  },
  components: {
    Card
  },
  computed: {
    products() {
      return this.$store.state.introducers.all
    }
  }
}
</script>
