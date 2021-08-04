<template>
  <fragment>
    <a
      v-if="external"
      :href="href"
      :target="target"
      :class="[square ? 'square-link' : '', addClass]"
      ><slot></slot
    ></a>
    <NuxtLink v-else :to="href" :class="[square ? 'square-link' : '', addClass]"
      ><slot></slot
    ></NuxtLink>
  </fragment>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    external: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      default: '_self',
    },
    square: {
      type: Boolean,
      default: false,
    },
    addClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
a {
  display: inline-block;
  padding: 0 10px;
  border: 1px none #000;
  border-radius: 2px;
  background-color: rgba(29, 49, 31, 0.3);
  transition: border 300ms ease, color 300ms ease;
  color: #dae6de;
  font-size: 14px;
  line-height: 30px;
  &:hover {
    background-color: rgba(29, 49, 31, 0.6);
    color: #fff;
  }
  &.square-link {
    border-radius: 4px;
    margin-right: 5px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color $defaultTransitionDuration ease;
    img {
      width: 15px;
      max-height: 15px;
      opacity: 0.5;
      transition: opacity $defaultTransitionDuration ease;
    }
    &:hover {
      img {
        opacity: 1;
      }
    }
  }
}
</style>
