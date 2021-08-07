<template>
  <fragment>
    <nav :style="`background-color:rgba(242, 245, 243, ${scrollPercent})`">
      <div class="container d-flex align-items-center">
        <site-logo :scroll-percent="scrollPercent" />
        <ul class="nav ml-auto desktop-menu" :style="`color: ${hslColor};`">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/families" class="nav-link">Families</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="#" class="nav-link">Pages</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="#" class="nav-link">Shop</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          </li>
        </ul>
        <a
          href="#"
          class="btn donate-btn"
          :class="$route.path == '/contact' ? 'secondary' : 'primary'"
          @click.prevent="$bvModal.show('donate-modal')"
          >Donate Now</a
        >

        <b-modal id="donate-modal" hide-footer hide-header centered>
          <a
            href="#"
            class="btn close-btn"
            @click.prevent="$bvModal.hide('donate-modal')"
          >
            <img
              src="~/assets/imgs/svg/icons/close-modal.svg"
              alt="Close"
              class="img-fluid"
          /></a>
          <div class="modal-inner text-center">
            <h2 class="mb-3 roboto-bold">Donate Today</h2>
            <p class="mb-5 roboto-medium secondary-text sub-title">
              EVERY DOLLAR COUNTS
            </p>
            <form>
              <div class="form-group mb-3">
                <input
                  type="number"
                  name="amount"
                  class="form-control"
                  placeholder="$"
                />
              </div>
              <div class="form-group mb-3">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form-group mb-3">
                <input
                  type="text"
                  name="surname"
                  class="form-control"
                  placeholder="Enter your Surname"
                />
              </div>
              <div class="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Enter your email address"
                />
              </div>
              <div class="form-group mb-3">
                <!-- <input type="text" name="additional-info" class="form-control" /> -->
                <textarea
                  name="additional-info"
                  rows="3"
                  class="form-control"
                  placeholder="Additional information"
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn primary bordered btn-block"
                @click.prevent
              >
                Place Donation
              </button>
            </form>
          </div>
        </b-modal>

        <mobile-nav-toggler
          :hsl-color="hslColor"
          @click.native.prevent="mobileNavStatus = 'opened'"
        />
      </div>
    </nav>
    <mobile-nav
      :status="mobileNavStatus"
      @nav-closed="mobileNavStatus = 'closed'"
    />
  </fragment>
</template>

<script>
import MobileNav from './MobileNav.vue'
import MobileNavToggler from './MobileNavToggler.vue'
import SiteLogo from './SiteLogo.vue'
export default {
  components: { SiteLogo, MobileNavToggler, MobileNav },
  data() {
    return {
      scrollPercent: 0,
      mobileNavStatus: 'closed',
    }
  },
  computed: {
    hslColor() {
      return `hsl(0, 0%, ${(1 - this.scrollPercent) * 100}%)`
    },
  },
  mounted() {
    window.addEventListener(
      'scroll',
      () => {
        const scroll = window.pageYOffset || document.documentElement.scrollTop
        if (scroll >= 0) {
          this.scrollPercent = scroll / 100
          if (this.scrollPercent > 1) this.scrollPercent = 1
        }
      },
      { passive: true }
    )
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992) this.mobileNavStatus = 'closed'
    })
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
nav {
  background-color: rgba(242, 245, 243, 1);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  padding: 12px 0;
  will-change: background-color;
}
.donate-btn {
  margin-left: auto;
}
.desktop-menu {
  display: none;
  .nav-link {
    font-size: 15px;
    line-height: 25px;
    padding: 20px;
    opacity: 0.9;
    &:hover,
    &.nuxt-link-exact-active {
      opacity: 1;
      font-weight: map-get($RobotoWeights, 'bold');
    }
  }
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0.5;
  padding: 10px;
  &:hover {
    opacity: 1;
  }
  img {
    width: 40px;
    height: 40px;
  }
}

.modal-inner {
  background: #fff;
  border-radius: 10px;
  padding: 40px 20px 20px;

  @include media-sm {
    padding: 50px 40px 40px;
    margin: 0 5px;
  }
}

.form-control {
  height: 45px;
  font-family: $OpenSansFont;
}

textarea.form-control {
  height: auto;
}

@include media-lg {
  .desktop-menu {
    display: flex;
    .nav-item,
    .nav-link {
      color: inherit;
    }
  }
  .donate-btn {
    margin-left: 80px;
  }
}

@include media-max-sm {
  .donate-btn {
    padding: 12px 18px;
    font-size: 13px;
  }
}

@include media-max-xs {
  .donate-btn {
    display: none;
  }
}
</style>
