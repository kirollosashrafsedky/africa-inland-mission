<template>
  <button class="btn mobile-nav-toggler d-flex d-lg-none">
    <span class="bar" :style="`background-color: ${hslColor};`"></span>
    <span class="bar" :style="`background-color: ${hslColor};`"></span>
    <span class="bar" :style="`background-color: ${hslColor};`"></span>
  </button>
</template>

<script>
export default {
  props: {
    hslColor: {
      type: String,
      default: 'hsl(0, 0%, 100%)',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
.mobile-nav-toggler {
  width: 55px;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px 0 15px 20px;
  margin-left: 5px;
  flex-shrink: 0;
  .bar {
    display: block;
    height: 4px;
    background: inherit;
    margin-bottom: 6px;
    width: 100%;
    border-radius: 50px;
    &:nth-child(2) {
      width: 70%;
    }
    &:last-of-type {
      margin-bottom: 0;
      width: 50%;
    }
  }
}

@include media-max-sm {
  .mobile-nav-toggler {
    padding: 15px 0 15px 10px;
    width: 45px;
  }
}

@include media-max-xs {
  .mobile-nav-toggler {
    margin-left: auto;
  }
}
</style>
