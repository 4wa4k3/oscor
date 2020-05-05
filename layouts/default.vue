<template>
  <div>
    <LangNavigation />
    <div>
      <nuxt-link :to="localePath('index')">{{ $t('pages.home') }}</nuxt-link>
      <nuxt-link :to="localePath({ name: 'products-introducers' })">{{
        $t('pages.introducers')
      }}</nuxt-link>
      <nuxt-link :to="localePath({ name: 'products-guiding-sheaths' })">{{
        $t('pages.guiding_sheaths')
      }}</nuxt-link>
      <nuxt-link :to="localePath({ name: 'products-temporary-pacing' })">{{
        $t('pages.temporary_pacing')
      }}</nuxt-link>
      <nuxt-link
        :to="localePath({ name: 'products-temporary-pacing-pacemakers' })"
        >{{ $t('pages.pacemakers') }}</nuxt-link
      >
      <nuxt-link
        :to="localePath({ name: 'products-temporary-pacing-cables' })"
        >{{ $t('pages.cables') }}</nuxt-link
      >
      <nuxt-link :to="localePath({ name: 'products-lead-adaptors' })">{{
        $t('pages.lead_adaptors')
      }}</nuxt-link>
      <nuxt-link :to="localePath({ name: 'products-accessories' })">{{
        $t('pages.accessories')
      }}</nuxt-link>
      <nuxt-link :to="localePath({ name: 'company' })">{{
        $t('pages.company')
      }}</nuxt-link>
    </div>
    <nuxt />
    <div>
      <nuxt-link :to="localePath({ name: 'quality-policy' })">{{
        $t('pages.quality_policy')
      }}</nuxt-link>
    </div>
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
