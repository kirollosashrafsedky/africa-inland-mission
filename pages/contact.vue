<template>
  <div class="light-bg">
    <common-header bg="primary" :breadcrumb="breadcrumb">
      <template #page-heading>Contact Us</template>
      <template #page-subtitle
        >That's what I consider true generosity: You give your all, and yet you
        always feel as if it costs you nothing.</template
      >
    </common-header>
    <contact-form class="contact-main" />
    <contact-bottom class="mt-4" />
  </div>
</template>

<script>
import CommonHeader from '~/components/common/CommonHeader.vue'
import ContactForm from '~/components/contact/ContactForm.vue'
import ContactBottom from '~/components/contact/ContactBottom.vue'

export default {
  components: { CommonHeader, ContactForm, ContactBottom },
  data() {
    return {
      breadcrumb: [
        { name: 'Home', link: '/', current: false },
        { name: 'Contact Us', link: 'contact', current: true },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
.contact-main {
  padding: 96px 0;
}
</style>
