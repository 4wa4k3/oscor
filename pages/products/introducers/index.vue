<template>
  <div>
    <h1>Introducers</h1>
    <div>
      <div v-for="product in products" :key="product.id">
        <h1>{{ product.name }}</h1>
        <span>slug: {{ product.slug }}</span>
        <nuxt-link :to="`introducers/${product.slug}`">view</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.introducers.all
    }
  }
}
</script>
