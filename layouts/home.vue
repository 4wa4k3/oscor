<template>
  <div class="home-container">
    <Nav class="home-nav" :class="{ 'nav-open': nav }" />
    <div class="home-wrap" :class="{ 'wrap-shrink': nav }">
      <Header />
      <nuxt class="home-main" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'
export default {
  components: {
    Header,
    Nav,
    Footer
  },
  data() {
    return {
      showNav: true
    }
  },
  computed: {
    nav() {
      return this.$store.getters['navs/navActive']
    }
  },
  head: {
    bodyAttrs: {
      class: 'home-page'
    }
  }
}
</script>
