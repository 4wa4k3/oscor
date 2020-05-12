<template>
  <div class="footer">
    <Logo :logo="logo" />
    <nuxt-link :to="localePath({ name: 'quality-policy' })">{{
      $t('pages.quality_policy')
    }}</nuxt-link>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  },
  data() {
    return {
      logo: {
        width: '1.479375in',
        height: '0.320625in'
      }
    }
  }
}
</script>
