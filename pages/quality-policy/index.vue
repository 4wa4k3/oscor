<template>
  <div>
    <section class="section-small section-hero">
      <div class="content-wrap">
        <h1>{{ $t('pages.quality_policy') }}</h1>
      </div>
    </section>
    <section>
      <div class="content-wrap">
        <p>{{ $t('quality_policy.p1') }}</p>
        <p>{{ $t('quality_policy.p2') }}</p>
        <p>{{ $t('quality_policy.p3') }}</p>
        <p>{{ $t('quality_policy.p4') }}</p>
        <p>{{ $t('quality_policy.p5') }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/quality-policy',
      es: '/politíca-de-calidad',
      de: '/qualitätspolitik'
    }
  }
}
</script>
