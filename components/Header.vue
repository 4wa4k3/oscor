<template>
  <div class="top_nav">
    <div class="brand-container">
      <button aria-pressed="false" aria-label="menu" @click="$emit('toggle')">
        <MenuButton />
      </button>
      <Logo :logo="logo" />
    </div>
    <LangNavigation />
  </div>
</template>
<script>
import MenuButton from '~/components/MenuButton'
import Logo from '~/components/Logo'
import LangNavigation from '~/components/LangNavigation'
export default {
  components: {
    MenuButton,
    Logo,
    LangNavigation
  },
  data() {
    return {
      logo: {
        width: '1.9725in',
        height: '0.4275in'
      }
    }
  }
}
</script>
