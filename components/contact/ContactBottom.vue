<template>
  <div class="wrapper">
    <b-container>
      <b-row
        class="
          align-items-center
          justify-content-center justify-content-md-center
        "
      >
        <b-col cols="12" lg="3" class="mb-4 mb-lg-0">
          <img
            src="~/assets/imgs/png/kajan-logo.png"
            alt="kajan"
            class="img-fluid"
          />
        </b-col>
        <b-col cols="12" lg="6" class="mb-4 mb-lg-0">
          <p class="open-sans-regular">
            Since 28 Years Helping People with Trust and Love
            <br />
            <strong class="roboto-bold">‍We Only Have What we Give.</strong>
          </p>
        </b-col>
        <b-col cols="12" lg="3" class="mb-4 mb-lg-0">
          <a href="#" class="btn primary bordered">Apply For Volunteer</a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
.wrapper {
  background-color: $secondaryColorBg;
  padding: 48px 0;
}
.btn.primary {
  color: $textWhite;
  border-color: $textWhite;
  background-color: $secondaryColorLight;
  &:hover {
    color: $textWhite;
    background-color: $primaryColor;
    border-color: $primaryColor;
  }
}
p {
  font-size: 20px;
  line-height: 30px;
  color: #f2f5f3;
}
img {
  width: 80px;
}
.col-12 {
  @include media-max-lg {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
