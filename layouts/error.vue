<template>
  <div>
    <common-header bg="secondary">
      <template v-if="error.statusCode === 404" #page-heading
        >404 - Page not found</template
      >
      <template v-else #page-heading>An error occurred</template>
      <template #page-additional-info
        ><NuxtLink to="/" class="btn primary bordered"
          >Return to Home page</NuxtLink
        ></template
      >
    </common-header>
  </div>
</template>

<script>
import CommonHeader from '~/components/common/CommonHeader.vue'

export default {
  components: { CommonHeader },

  layout: 'error', // you can set a custom layout for the error page
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
.btn.primary.bordered {
  color: $textWhite;
  border-color: $textWhite;
  background-color: rgba(255, 255, 255, 0.15);
  &:hover {
    color: $textWhite;
    background-color: $primaryColor;
    border-color: $primaryColor;
  }
}
</style>
