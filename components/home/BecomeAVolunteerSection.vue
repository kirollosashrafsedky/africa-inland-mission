<template>
  <section>
    <b-container class="text-left">
      <b-row>
        <b-col
          data-aos="fade-left"
          data-aos-duration="800"
          cols="12"
          lg="6"
          class="order-1 order-lg-0 mt-0 mt-lg-5 pt-0 pt-lg-5"
        >
          <h2 class="mb-4">
            Want to Become <br />
            Volunteer in Our Causes
          </h2>
          <p class="open-sans-regular text-dark1 mb-4">
            Your work is going to fill a large part of your life, and the only
            way to be truly satisfied is to do what you believe is great work.
            And the only way to do great work is to love what you do.
          </p>
          <ul class="mb-5">
            <li class="nav-item">5+ years of experience</li>
            <li class="nav-item">2+ years of experience managing a team</li>
            <li class="nav-item">Ability to interpret campaign performance</li>
            <li class="nav-item">
              2+ years of experience working hands on campaigns
            </li>
          </ul>
          <NuxtLink to="/families" class="btn primary bordered"
            >View All Causes</NuxtLink
          >
        </b-col>
        <b-col
          cols="12"
          lg="6"
          class="mb-lg mb-lg-0 order-0 order-lg-1 position-relative"
        >
          <div class="img-wrapper-lg"></div>
          <div class="card">
            <div
              class="card-image"
              :style="`background-image:url('${require('~/assets/imgs/jpg/people/darian-cormier.jpg')}');`"
            ></div>
            <div class="social-links">
              <a href="#">
                <img
                  src="~/assets/imgs/svg/social/twitter-white.svg"
                  alt="twitter"
                />
              </a>
              <a href="#">
                <img
                  src="~/assets/imgs/svg/social/facebook-white.svg"
                  alt="facebook"
                />
              </a>
              <a href="#">
                <img
                  src="~/assets/imgs/svg/social/google-plus-white.svg"
                  alt="google-plus"
                />
              </a>
              <a href="#">
                <img
                  src="~/assets/imgs/svg/social/instagram-white.svg"
                  alt="instagram"
                />
              </a>
            </div>
            <h5 class="roboto-bold py-3">Darian Cormier</h5>
            <p class="position">Project Cordinator</p>
            <a href="#" class="stretched-link"></a>
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
section {
  padding: 80px 0;
  background-color: $textLight;
  p {
    font-size: 15px;
    max-width: 400px;
    margin-left: 0;
    line-height: 25px;
  }
}
.nav-item {
  font-size: 15px;
  padding: 10px 0 10px 30px;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-color: $secondaryColorText;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-radius: 50%;
    background-image: url('~/assets/imgs/svg/icons/tick.svg');
    background-repeat: no-repeat;
    background-size: 54%;
    background-position: center;
  }
}
.img-wrapper-lg {
  background-image: url('~/assets/imgs/jpg/become-a-volunteer.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  min-height: 350px;
}
.card {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  align-items: center;
  transition: top $defaultTransitionDuration ease;
  box-shadow: 0 4px 20px 0 rgba(29, 49, 31, 0.15);

  @include media-sm {
    &:hover {
      top: 48%;
    }
  }
  .position {
    background-color: $primaryColor;
    border-radius: 6px;
    padding: 5px 20px;
    font-size: 12px;
    margin: auto;
    color: #fff;
  }
}
.card-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  border-radius: 10px;
  width: 100%;
  height: 250px;
}
.social-links {
  display: flex;
  justify-content: center;
  width: 75%;
  max-width: 300px;
  margin: -20px auto 0 auto;
  z-index: 5;
  a {
    background-color: $secondaryColorText;
    padding: 12px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, 0.4);
    flex: 1;
    &:first-of-type {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-of-type {
      border-right-width: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    img {
      width: 60%;
      max-height: 20px;
    }
    &:hover {
      background-color: $primaryColor;
    }
  }
}
@include media-sm {
  .nav-item {
    padding: 10px 0 10px 35px;
    &::after {
      width: 22px;
      height: 22px;
    }
  }
  .img-wrapper-lg {
    width: 80%;
    width: calc(100% - 80px);
  }
}
@include media-xs {
  .img-wrapper-lg {
    min-height: 500px;
  }
}
@include media-max-sm {
  .card {
    top: 80%;

    right: auto;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 80%;
    max-width: 400px;
  }
  .mb-lg {
    margin-bottom: 140px !important;
  }
}

@include media-max-xs {
  .card {
    display: none;
  }
  .mb-lg {
    margin-bottom: 40px !important;
  }
}
</style>
