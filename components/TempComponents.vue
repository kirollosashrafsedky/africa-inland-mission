<template>
  <div>
    <btn color-class="primary" add-classes="mx-3">Donate Now</btn>
    <btn color-class="secondary">Donate Now</btn>
    <btn color-class="primary" outline>Donate Now</btn>
    <btn color-class="secondary" outline>Donate Now</btn>
    <br />
    <btn color-class="primary" btn-type="link" href="/test">Donate Now</btn>
    <btn color-class="secondary" btn-type="link" href="/test">Donate Now</btn>
    <btn color-class="primary" outline btn-type="link" href="/test"
      >Donate Now</btn
    >
    <btn color-class="secondary" outline btn-type="link" href="/test"
      >Donate Now</btn
    >
    <br />
    <btn color-class="secondary" outline btn-type="submit">Donate Now</btn>
    <br />
    <NuxtLink to="/families" class="btn primary bordered">Families</NuxtLink>
    <br />
    <leran-more-link to="#" />
  </div>
</template>

<script>
import Btn from '~/components/common/Btn.vue'
import LeranMoreLink from '~/components/common/LeranMoreLink.vue'
export default {
  components: { Btn, LeranMoreLink },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
</style>
