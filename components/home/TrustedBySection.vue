<template>
  <section>
    <b-container class="text-center">
      <p class="mb-4 roboto-medium secondary-text sub-title">
        TRUSTED BY THE WORLD'S BEST TEAM
      </p>
      <div class="grid">
        <a href="#">
          <img
            src="~/assets/imgs/svg/trusted-by/designless.svg"
            alt="designless"
            class="img-fluid"
          />
        </a>
        <a href="#">
          <img
            src="~/assets/imgs/svg/trusted-by/brandisima.svg"
            alt="brandisima"
            class="img-fluid"
          /> </a
        ><a href="#">
          <img
            src="~/assets/imgs/svg/trusted-by/netpeople.svg"
            alt="netpeople"
            class="img-fluid"
          /> </a
        ><a href="#">
          <img
            src="~/assets/imgs/svg/trusted-by/nonsense.svg"
            alt="nonsense"
            class="img-fluid"
          /> </a
        ><a href="#">
          <img
            src="~/assets/imgs/svg/trusted-by/greenmarket.svg"
            alt="greenmarket"
            class="img-fluid"
          />
        </a>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
a {
  img {
    transition: opacity $defaultTransitionDuration ease;
    opacity: 0.6;
    width: 80%;
    max-width: 200px;
    margin-bottom: 30px;
  }
  &:hover {
    img {
      opacity: 1;
    }
  }
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

// @include media-sm {
//   .grid {
//     grid-template-columns: repeat(2, 1fr);
//   }
// }

@include media-sm {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@include media-md {
  .grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
