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
        <figure ref="hero" class="product-hero__img">
          <img
            class="hero-adelante"
            src="~assets/img/introducers/adelante/0250.png"
            alt=""
          />
        </figure>
      </div>
    </section>
    <section class="section-large section-product-description">
      <div class="content-wrap">
        <article ref="description" class="product-description">
          <p>
            {{ $t(`${product.short_name}.description`) }}
          </p>
        </article>
      </div>
    </section>
    <section ref="features" class="section-large section-product-features">
      <div class="content-wrap">
        <article class="product-features">
          <h2 class="product-features__title">{{ $t('product_features') }}</h2>
          <div class="product-features__container">
            <div class="product-features__feature">
              <figure class="product-features__feature-img">
                <div class="product-features__feature-txt">
                  Clear numeric print of French sizes
                </div>
              </figure>
            </div>
            <div class="product-features__feature">
              <figure class="product-features__feature-img">
                <div class="product-features__feature-txt">
                  Ergonomically designed handles
                </div>
              </figure>
            </div>
            <div class="product-features__feature">
              <figure class="product-features__feature-img">
                <div class="product-features__feature-txt">
                  Color coding of dilator lock and hub to prevent mismatches
                </div>
              </figure>
            </div>
            <div class="product-features__feature">
              <figure class="product-features__feature-img">
                <div class="product-features__feature-txt">
                  Optimized hub break force
                </div>
              </figure>
            </div>
            <div class="product-features__feature">
              <figure class="product-features__feature-img">
                <div class="product-features__feature-txt">
                  Consistent peel through twin channel sheath design
                </div>
              </figure>
            </div>
            <div class="product-features__feature">
              <figure class="product-features__feature-img">
                <div class="product-features__feature-txt">
                  Smooth dilator/sheath transition
                </div>
              </figure>
            </div>
            <div class="product-features__feature">
              <figure class="product-features__feature-img">
                <div class="product-features__feature-txt">
                  Smooth guidewire/dilator transition
                </div>
              </figure>
            </div>
            <div class="product-features__feature">
              <figure class="product-features__feature-img">
                <div class="product-features__feature-txt">
                  Coated sheath for superior lead passage
                </div>
              </figure>
            </div>
            <div class="product-features__feature">
              <figure class="product-features__feature-img">
                <div class="product-features__feature-txt">
                  Dilator tip indicator
                </div>
              </figure>
            </div>
            <div class="product-features__feature">
              <figure class="product-features__feature-img">
                <div class="product-features__feature-txt">
                  Accepts maximum guidewire up to 0.038″/0.96 mm
                </div>
              </figure>
            </div>
          </div>
        </article>
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
    const features = this.$refs.features
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
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: features,
        start: 'top center',
        end: 'bottom 100%',
        scrub: 1,
        markers: false,
        toggleActions: 'restart pause none none'
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

    tl2.addLabel('start').from('.product-features__feature', {
      stagger: { each: 0.2 },
      duration: 0.5,
      opacity: 0,
      ease: 'power3.in',
      xPercent: 100
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
