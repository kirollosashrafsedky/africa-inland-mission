<template>
  <div class="light-bg">
    <common-header bg="secondary" :breadcrumb="breadcrumb">
      <template #page-heading>Our Families</template>
      <template #page-subtitle
        >There is not a man of us who does not at times need a helping hand to
        be stretched out to him, and then shame upon him who will not stretch
        out the helping hand to his brother.</template
      >
    </common-header>
    <b-container class="my-5 py-5">
      <b-row no-gutters>
        <b-col
          v-for="family in families"
          :key="family.url"
          cols="12"
          lg="6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <family-card :data="family" />
        </b-col>
      </b-row>
    </b-container>
    <first-quote-section class="mt-3 mt-md-5 py-6" />
    <families-bottom />
  </div>
</template>

<script>
import CommonHeader from '~/components/common/CommonHeader.vue'
import FirstQuoteSection from '~/components/common/FirstQuoteSection.vue'
import FamiliesBottom from '~/components/families/FamiliesBottom.vue'
import FamilyCard from '~/components/families/FamilyCard.vue'

export default {
  components: { CommonHeader, FirstQuoteSection, FamiliesBottom, FamilyCard },
  data() {
    return {
      breadcrumb: [
        { name: 'Home', link: '/', current: false },
        { name: 'Families', link: 'families', current: true },
      ],
      // api will be called insetad of the fammilies object
      families: [
        {
          title: 'African Kindergarten',
          url: 'new-african-kindergarten',
          date: 'Thursday, July 9, 2020',
          img: 'new-african-kindergarten.jpg',
          earned: '$5,000',
          total: '$12,000',
          percent: 60,
        },
        {
          title: 'Clean Water For All',
          url: 'clean-water-for-all',
          date: 'Thursday, July 9, 2020',
          img: 'clean-water-for-all.jpg',
          earned: '$7,000',
          total: '$10,000',
          percent: 50,
        },
        {
          title: 'Our Charity Budget',
          url: 'the-upcoming-charity-budget',
          date: 'Thursday, July 9, 2020',
          img: 'the-upcoming-charity-budget.jpg',
          earned: '$5,000',
          total: '$9,000',
          percent: 70,
        },
        {
          title: 'New School Teachers',
          url: 'new-school-teachers',
          date: 'Thursday, July 9, 2020',
          img: 'new-school-teachers.jpg',
          earned: '$8,000',
          total: '$15,000',
          percent: 80,
        },
        {
          title: 'Clothes For Everyone',
          url: 'clothes-for-everyone',
          date: 'Thursday, July 9, 2020',
          img: 'clothes-for-everyone.jpg',
          earned: '$3,000',
          total: '$9,000',
          percent: 90,
        },
        {
          title: 'Children Of Pain',
          url: 'children-of-pain',
          date: 'Thursday, July 9, 2020',
          img: 'children-of-pain.jpg',
          earned: '$7,000',
          total: '$10,000',
          percent: 40,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
.py-6 {
  padding: 100px 0;
}
</style>
