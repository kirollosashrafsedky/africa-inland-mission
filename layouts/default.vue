<template>
  <div>
    <div id="main-fade-overflow"></div>
    <top-nav />
    <Nuxt />
    <main-footer />
  </div>
</template>

<script>
import MainFooter from '~/components/footer/MainFooter.vue'
import TopNav from '~/components/nav/TopNav.vue'
export default {
  components: {
    TopNav,
    MainFooter,
  },
  mounted() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
</style>
