<template>
  <div class="wrapper">
    <b-container class="text-center">
      <p class="subtitle mb-4">LETS START WITH THE FIRST STEP</p>
      <h3 class="mb-4">Welcome to the AIM Tuition Fundraiser.</h3>
      <NuxtLink to="#" class="mb-4 btn secondary bordered"
        >Apply Fot Volunteer</NuxtLink
      >
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
.wrapper {
  background-color: $primaryColor;
  background-image: linear-gradient(
      180deg,
      rgba(153, 21, 23, 0.94),
      rgba(153, 21, 23, 0.94)
    ),
    url('~/assets/imgs/png/kajan-logo.png');
  background-position: 0px 0px, 50% 50%;
  background-size: auto, cover;
  background-repeat: repeat, no-repeat;
  padding: 100px 0;
  color: #fff;
}
.subtitle {
  text-transform: uppercase;
  font-size: 12px;
}
h3 {
  font-size: 34px;
  color: #f2f5f3;
}
.btn.secondary {
  color: #fff;
  border-color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
  &:hover {
    border-color: $secondaryColor;
  }
}
</style>
