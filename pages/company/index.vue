<template>
  <div>
    <section class="section-small section-hero">
      <div class="content-wrap">
        <h1>{{ $t('pages.company') }}</h1>
      </div>
    </section>
    <section>
      <div class="content-wrap">
        <h2>{{ $t('company.about.title') }}</h2>
        <p>{{ $t('company.about.p1') }}</p>
        <p>{{ $t('company.about.p2') }}</p>
        <p>{{ $t('company.about.p3') }}</p>
      </div>
    </section>

    <section>
      <div class="content-wrap">
        <h2>{{ $t('company.tribute.title') }}</h2>
        <p>{{ $t('company.tribute.p1') }}</p>
        <p>{{ $t('company.tribute.p2') }}</p>
        <p>{{ $t('company.tribute.p3') }}</p>
        <span>{{ $t('company.tribute.salutation') }}</span>
      </div>
    </section>

    <section>
      <div class="content-wrap">
        <h2>{{ $t('company.facilities.title') }}</h2>
        <p>{{ $t('company.facilities.p1') }}</p>
        <h3>{{ $t('company.facilities.facility1.title') }}</h3>
        <span>{{ $t('company.facilities.facility1.description') }}</span>
        <h3>{{ $t('company.facilities.facility2.title') }}</h3>
        <span>{{ $t('company.facilities.facility2.description') }}</span>
        <h3>{{ $t('company.facilities.facility3.title') }}</h3>
        <span>{{ $t('company.facilities.facility3.description') }}</span>
        <h3>{{ $t('company.facilities.facility4.title') }}</h3>
        <span>{{ $t('company.facilities.facility4.description') }}</span>
      </div>
    </section>

    <section>
      <div class="content-wrap">
        <h2>{{ $t('company.distribution.title') }}</h2>
        <p>{{ $t('company.distribution.p1') }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    paths: {
      en: '/company',
      es: '/compañia',
      de: '/unternehmen'
    }
  }
}
</script>
