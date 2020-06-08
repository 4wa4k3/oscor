<template>
  <div class="container">
    <Nav :class="{ 'nav-open': nav }" />
    <div class="wrap" :class="{ 'wrap-shrink': nav }">
      <Header />
      <nuxt class="main" />
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
  }
  // methods: {
  //   navOpen() {
  //     this.$store.commit('navs/navOpen')
  //   }
  // }
}
</script>
