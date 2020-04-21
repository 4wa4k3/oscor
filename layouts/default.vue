<template>
  <div>
    <LangNavigation />
    <LangSwitcher />
    <div>
      <nuxt-link :to="localePath('index')">{{ $t('home') }}</nuxt-link>
      <nuxt-link :to="localePath('/products/introducers')">{{
        $t('introducers')
      }}</nuxt-link>
      <nuxt-link :to="localePath('/products/guiding_sheaths')">{{
        $t('guiding_sheaths')
      }}</nuxt-link>
    </div>
    <nuxt />
  </div>
</template>

<script>
import LangNavigation from '~/components/LangNavigation'
import LangSwitcher from '~/components/LangSwitcher'
export default {
  components: {
    LangNavigation,
    LangSwitcher
  }
}
</script>
