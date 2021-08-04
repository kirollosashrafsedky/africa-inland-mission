<template>
  <section>
    <b-container class="text-left">
      <b-row class="align-items-start">
        <b-col cols="12" lg="5" xl="4" class="mb-4 mb-lg-0">
          <p class="mb-2 roboto-medium secondary-text sub-title">
            ALL A ROUND THE WORLD
          </p>
          <h2 class="roboto-medium">Our Mission is to Help The Helpless</h2>
        </b-col>
        <b-col cols="12" lg="7" xl="8">
          <blockquote class="my-4 open-sans-regular text-dark1">
            “In the end, though, maybe we must all give up trying to pay back
            the people in this world who sustain our lives. In the end, maybe
            it's wiser to surrender before the miraculous scope of human
            generosity and to just keep saying thank you, forever and sincerely,
            for as long as we have voices.”
          </blockquote>
          <img
            src="~/assets/imgs/jpg/signature.jpg"
            alt="signature"
            class="img-fluid signature"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
section {
  .signature {
    width: 200px;
  }
}
</style>
