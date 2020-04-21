<template>
  <div>
    <div>
      <nuxt-link :to="localePath('/')">home</nuxt-link>
      <nuxt-link :to="localePath('/products/introducers')"
        >introducers</nuxt-link
      >
      <nuxt-link :to="localePath('/products/guiding_sheaths')"
        >guiding sheaths</nuxt-link
      >
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>
