<template>
  <section>
    <b-container>
      <b-row class="align-items-stretch">
        <b-col cols="12" lg="4" class="mb-3 mb-lg-0" data-aos="fade-up">
          <div class="card">
            <img
              src="~/assets/imgs/jpg/give-donation-card.jpg"
              alt="give donation"
              class="img-fluid"
            />
            <div class="card-body">
              <h3 class="mb-4">Give Donation</h3>
              <p class="mb-4">
                It's not how much we give but how much love we put into giving.
              </p>
              <NuxtLink to="#" class="pb-1 learnmore-link">LEARN MORE</NuxtLink>
            </div>
          </div>
        </b-col>
        <b-col
          cols="12"
          lg="4"
          class="mb-3 mb-lg-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="card">
            <img
              src="~/assets/imgs/jpg/contact-us-card.jpg"
              alt="Contact Us"
              class="img-fluid"
            />
            <div class="card-body">
              <h3 class="mb-4">Contact Us</h3>
              <p class="mb-4">
                There is no exercise better for the heart than down and lifting
                people up.
              </p>
              <NuxtLink to="#" class="pb-1 learnmore-link">LEARN MORE</NuxtLink>
            </div>
          </div>
        </b-col>
        <b-col
          cols="12"
          lg="4"
          class="mb-3 mb-lg-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="card">
            <img
              src="~/assets/imgs/jpg/become-a-volunteer-card.jpg"
              alt="Become a Volunteer"
              class="img-fluid"
            />
            <div class="card-body">
              <h3 class="mb-4">Become a Volunteer</h3>
              <p class="mb-4">
                It's not how much we give but how much love we put into giving.
              </p>
              <NuxtLink to="#" class="pb-1 learnmore-link">LEARN MORE</NuxtLink>
            </div>
          </div>
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
.card {
  overflow: hidden;
  background-color: $textLight;
  border-radius: 10px;
  border: 1px solid #dae6de;
  text-align: center;
  .card-body {
    padding: 25px;
  }
  h3 {
    font-size: 20px;
  }
}
@include media-xs {
  .card {
    .card-body {
      padding: 35px;
    }
  }
}
</style>
