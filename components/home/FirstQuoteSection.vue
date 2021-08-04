<template>
  <section>
    <div class="container text-center">
      <p class="mb-2 roboto-medium secondary-text sub-title">
        ALL A ROUND THE WORLD
      </p>
      <p class="mb-4 open-sans-regular text-dark1 max-700">
        Don’t take too much advice. Most people who have a lot of advice to give
        — with a few exceptions — generalize whatever they did. Don’t
        over-analyze everything. I myself have been guilty of over-thinking
        problems. Just build things and find out if they work.
      </p>
      <div class="d-flex align-items-center justify-content-center">
        <NuxtLink to="/" class="btn secondary bordered mr-3 px-4"
          >Purchase Idea</NuxtLink
        >
        <btn color-class="primary" outline btn-type="link" add-classes="px-4"
          >Donate Now</btn
        >
      </div>
    </div>
  </section>
</template>

<script>
import Btn from '../common/Btn.vue'
export default {
  components: { Btn },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
</style>
