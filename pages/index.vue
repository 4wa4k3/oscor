<template>
  <div class="container">
    <div ref="vidwrapper" class="hero-video-wrapper">
      <div ref="vidcont" class="hero-video-container">
        <video ref="vid" playsinline autoplay loop muted preload="auto">
          <source
            src="~assets/videos/oscor_virtual_tour_no_logo.webm"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
  mounted() {
    const vid = this.$refs.vid

    vid.style.width = `${window.innerWidth}px`
    // vid.style.height = `${window.innerHeight}px`
    // vid.style.left = `-${window.innerWidth -
    //   parseInt(vid.style.width) / 0.25}px`

    window.addEventListener('resize', () => {
      vid.style.width = `${window.innerWidth}px`
      vid.style.height = `${window.innerHeight}px`
      vid.style.left = `${parseInt(vid.style.width) / 2}px`
    })
  }
}
</script>
