<template>
  <div class="container">
    <Nav :class="{ 'nav-open': showNav }" @toggle="showNav = !showNav" />
    <div
      class="wrap"
      :class="{ 'wrap-shrink': showNav }"
      @toggle="showNav = !showNav"
    >
      <Header @toggle="showNav = !showNav" />
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
  }
}
</script>
