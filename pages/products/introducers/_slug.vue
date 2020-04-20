<template>
  <div>
    <h1>{{ product.name }}</h1>
  </div>
</template>

<script>
export default {
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
