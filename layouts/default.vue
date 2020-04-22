<template>
  <div>
    <LangNavigation />
    <div>
      <nuxt-link :to="localePath('index')">{{ $t('home') }}</nuxt-link>
      <nuxt-link :to="localePath({ name: 'products-introducers' })">{{
        $t('introducers')
      }}</nuxt-link>
      <nuxt-link :to="localePath({ name: 'products-guiding-sheaths' })">{{
        $t('guiding_sheaths')
      }}</nuxt-link>
    </div>
    <nuxt />
  </div>
</template>

<script>
import LangNavigation from '~/components/LangNavigation'
export default {
  components: {
    LangNavigation
  }
}
</script>
