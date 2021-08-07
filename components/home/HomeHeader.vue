<template>
  <header>
    <b-container class="h-100">
      <b-row class="h-100">
        <b-col
          cols="12"
          md="6"
          lg="5"
          class="
            mb-5
            d-flex
            flex-column
            justify-content-center
            align-items-start
          "
        >
          <h1 class="mb-4 roboto-medium" data-aos="fade-left">
            Help Fund Tuition for missionary kids
          </h1>
          <p
            class="mb-4 open-sans-regular"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            While we do our good works let us not forget that the real solution
            lies in a world in which charity will have become unnecessary.
          </p>
          <div data-aos="fade-left" data-aos-delay="200">
            <NuxtLink to="#" class="btn primary">Fund Tuition</NuxtLink>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
header {
  height: 100vh;
  // height: calc(var(--vh, 1vh) * 100);
  background: linear-gradient(312deg, rgba(29, 49, 31, 0.15) 40%, #1f8526),
    url('@/assets/imgs/jpg/header-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 61% 50%;
  width: 100%;
  max-height: 1500px;
  min-height: 600px;
  color: $textLight;
}
h1 {
  font-size: 40px;
}
p {
  line-height: 26px;
  font-size: 16px;
}
</style>
