<template>
  <a :href="href">LEARN MORE</a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
a {
  border-bottom: 2px solid $primaryColor;
  font-family: $RobotoFont;
  color: $primaryColor;
  font-size: 12px;
  line-height: 22px;
  font-weight: map-get($RobotoWeights, 'medium');
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    border-bottom-color: $secondaryColor;
    color: $secondaryColor;
  }
}
</style>
