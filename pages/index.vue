<template>
  <div>
    <home-header />
    <home-inline-form class="mb-5" />
    <first-quote-section class="my-3 my-md-5 py-4 py-md-5" />
    <card-links-section class="my-3 my-md-5 py-4 py-md-5" />
    <mission-section class="my-3 my-md-5 py-4 py-md-5" />
    <goals-section class="my-3 my-md-5" />
    <trusted-by-section class="my-3 my-md-5 py-4" />
    <statistics class="my-3 my-md-5 pb-5" />
    <become-a-volunteer-section class="mt-3 mt-md-5" />
  </div>
</template>

<script>
import BecomeAVolunteerSection from '~/components/home/BecomeAVolunteerSection.vue'
import CardLinksSection from '~/components/home/CardLinksSection.vue'
import FirstQuoteSection from '~/components/home/FirstQuoteSection.vue'
import GoalsSection from '~/components/home/GoalsSection.vue'
import HomeHeader from '~/components/home/HomeHeader.vue'
import HomeInlineForm from '~/components/home/HomeInlineForm.vue'
import MissionSection from '~/components/home/MissionSection.vue'
import Statistics from '~/components/home/Statistics.vue'
import TrustedBySection from '~/components/home/TrustedBySection.vue'
export default {
  components: {
    HomeHeader,
    HomeInlineForm,
    FirstQuoteSection,
    MissionSection,
    CardLinksSection,
    GoalsSection,
    TrustedBySection,
    Statistics,
    BecomeAVolunteerSection,
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
</style>
