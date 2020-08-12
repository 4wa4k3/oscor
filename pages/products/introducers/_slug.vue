<template>
  <div>
    <section class="section-large section-hero">
      <div class="content-wrap">
        <h1 ref="title" class="product-title">
          {{ product.name }}
          <sup v-if="product.symbol" class="product-symbol"
            ><span v-html="product.symbol"></span
          ></sup>
        </h1>
        <h2 ref="subhead" class="product-subhead">
          {{ $t(`${product.short_name}.short_description`) }}
        </h2>
        <figure class="product-hero__img">
          <img
            ref="hero"
            class="hero-adelante"
            src="~assets/img/introducers/adelante/0250.png"
            alt=""
          />
        </figure>
      </div>
    </section>
    <section class="section-large">
      <div class="content-wrap">
        <article ref="description" class="product-description">
          <p>
            The Adelante® Peel Away Introducer System is one of the most
            advanced introducers available for placement of permanent pacing
            leads and catheters. It offers exceptional insertion, smooth lead
            movement, high kink resistance and exceptional peeling performance
            even in complex conditions.
          </p>
        </article>
        <article ref="features" class="product-features"></article>
      </div>
    </section>
  </div>
</template>

<script>
// import { gsap, ScrollTrigger } from 'gsap/all'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  nuxtI18n: {
    paths: {
      en: '/products/introducers/:slug',
      es: '/productos/introductores/:slug',
      de: '/produkte/einführer/:slug'
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    product() {
      return this.$store.state.introducers.all.find(
        (product) => product.slug === this.slug
      )
    }
  },
  mounted() {
    const description = this.$refs.description
    const title = this.$refs.title
    const subhead = this.$refs.subhead
    const hero = this.$refs.hero
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: 'top 45%',
        end: 'bottom 100%',
        scrub: 1,
        markers: false,
        toggleActions: 'restart pause reverse reset'
      }
    })
    tl.addLabel('start')
      .set(hero, { scale: 1.1 })
      .from(hero, { opacity: 0, duration: 0.8 })
      .from(hero, { rotation: 35 })
      .to(hero, { scale: 1 })
      .from(description, {
        duration: 0.5,
        opacity: 0,
        ease: 'power3.in',
        yPercent: -100
      })

    gsap.timeline().from([title, subhead], {
      duration: 0.9,
      opacity: 0,
      ease: 'circ',
      yPercent: -100,
      stagger: 0.3
    })
  }
}
</script>
