<template>
  <div ref="fullpage" class="container">
    <section
      ref="vidwrapper"
      class=" section fp-section fp-table hero-video-wrapper"
    >
      <div class=" video-container">
        <video ref="vid" playsinline autoplay loop muted preload="auto">
          <source
            src="~assets/videos/oscor_virtual_tour_no_logo.webm"
            type="video/webm"
          />
        </video>
      </div>
    </section>
    <section
      class="fp-section fp-table"
      style="background-image: url('/img/pilars/finished_devices.png');"
    >
      <div class="fp-tableCell">
        <h2>Finished Medical Devices</h2>
        <span></span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed
          cumque earum repellat quaerat tempora repellendus porro? Non optio
          voluptates iste, quis quaerat ducimus quas. Sit incidunt odio omnis
          hic.
        </p>
        <a class="cta" href="#">LEARN MORE</a>
      </div>
    </section>
    <section
      class="fp-section fp-table"
      style="background-image: url('/img/pilars/contract_manufacturing.png');"
    >
      <div class="fp-tableCell">
        <h2>Contract Development &amp; Manufacturing</h2>
        <span></span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed
          cumque earum repellat quaerat tempora repellendus porro? Non optio
          voluptates iste, quis quaerat ducimus quas. Sit incidunt odio omnis
          hic.
        </p>
        <a class="cta" href="#">GET STARTED</a>
      </div>
    </section>
    <section
      class="fp-section fp-table"
      style="background-image: url('/img/pilars/device_prototype.png');"
    >
      <div class="fp-tableCell">
        <h2>Prototype Development</h2>
        <span></span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed
          cumque earum repellat quaerat tempora repellendus porro? Non optio
          voluptates iste, quis quaerat ducimus quas. Sit incidunt odio omnis
          hic.
        </p>
        <a class="cta" href="#">GET STARTED</a>
      </div>
    </section>
    <section
      class="fp-section fp-table"
      style="background-image: url('/img/pilars/components.png');"
    >
      <div class="fp-tableCell">
        <h2>
          Medical Components
        </h2>
        <span></span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed
          cumque earum repellat quaerat tempora repellendus porro? Non optio
          voluptates iste, quis quaerat ducimus quas. Sit incidunt odio omnis
          hic.
        </p>
        <a class="cta" href="#">PURCHASE</a>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  layout: 'home',
  mounted() {
    const sections = document.querySelectorAll('section')
    // const tbleCell = document.querySelectorAll('.fp-tableCell')
    const content = this.$refs.fullpage
    let spinVal = 0
    let canScroll = true

    window.addEventListener('mousewheel', (e) => {
      if (canScroll) {
        canScroll = false
        if (e.deltaY > 0) {
          if (spinVal < sections.length - 1) spinVal += 1
        } else if (spinVal > 0) {
          spinVal -= 1
        }

        scrollContent(spinVal)
      }

      setTimeout(() => {
        canScroll = true
      }, 560)
    })

    function scrollContent(count) {
      content.setAttribute('style', `transform: translateY(-${count * 100}vh)`)
    }
  }
}
</script>
