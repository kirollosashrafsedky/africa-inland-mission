<template>
  <fragment>
    <a
      v-if="btnType == 'link'"
      class="btn"
      :class="[colorClass, outline ? 'bordered' : '', addClasses]"
      :href="href"
      ><slot></slot
    ></a>
    <button
      v-else
      :type="btnType == 'submit' ? 'submit' : 'button'"
      class="btn"
      :class="[colorClass, outline ? 'bordered' : '', addClasses]"
    >
      <slot></slot>
    </button>
  </fragment>
</template>

<script>
export default {
  props: {
    colorClass: {
      type: String,
      default: 'primary',
    },
    outline: {
      type: Boolean,
      default: false,
    },
    btnType: {
      type: String,
      default: 'button',
    },
    href: {
      type: String,
      default: '',
    },
    addClasses: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
</style>
