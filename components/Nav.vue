<template>
  <div class="nav">
    <nuxt-link :to="localePath('index')">{{ $t('pages.home') }}</nuxt-link>
    <div class="nav-sub-category-container">
      <!-- Products -->
      <div class="nav-sub-category">
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
      </div>
    </div>
    <nuxt-link :to="localePath({ name: 'company' })">{{
      $t('pages.company')
    }}</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>
