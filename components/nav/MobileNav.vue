<template>
  <transition name="nav-transition">
    <div v-show="status == 'opened'" class="mobile-nav" :class="status">
      <div class="d-flex justify-content-end top">
        <a href="#" class="btn close-btn" @click.prevent="$emit('nav-closed')"
          ><img
            src="~/assets/imgs/svg/icons/close.svg"
            alt="close"
            class="img-fluid"
        /></a>
      </div>
      <ul class="nav">
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link" @click.native="closeNav">
            Home
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/families" class="nav-link" @click.native="closeNav">
            Families
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/families" class="nav-link" @click.native="closeNav">
            Pages
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/families" class="nav-link" @click.native="closeNav">
            Shop
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/contact" class="nav-link" @click.native="closeNav">
            Contact
          </NuxtLink>
        </li>
      </ul>
      <div class="my-4 px-3">
        <a
          href="#"
          class="btn primary donate-btn btn-block"
          @click.prevent="
            $emit('nav-closed')
            $bvModal.show('donate-modal')
          "
          >Donate Now</a
        >
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: 'closed',
    },
  },
  data() {
    return {}
  },

  watch: {
    status() {
      if (this.status === 'opened') {
        document.getElementById('main-fade-overflow').style.display = 'block'
        // this.$refs['mobile-nav'].style.display = 'block'

        setTimeout(() => {
          document
            .getElementsByTagName('BODY')[0]
            .classList.add('overflow-hidden', 'overflow-bg')
        }, 10)
      } else {
        document
          .getElementsByTagName('BODY')[0]
          .classList.remove('overflow-hidden', 'overflow-bg')
        setTimeout(() => {
          document.getElementById('main-fade-overflow').style.display = 'none'
        }, 200)
      }
    },
  },
  methods: {
    closeNav() {
      this.$emit('nav-closed')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
.mobile-nav {
  position: fixed;
  top: 0;
  right: 0px;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.25);
  z-index: 2000;
  overflow: auto;
  @include media-sm {
    max-width: 400px;
  }
}
.top {
  border-bottom: 1px solid #e6e6e6;
}
.nav {
  flex-direction: column;
}
.nav-link {
  color: $textDark1;
  padding: 20px;
  position: relative;
  &.nuxt-link-exact-active {
    background-color: $textLight;
    font-weight: map-get($RobotoWeights, 'bold');
  }
  &:hover {
    background-color: $textLight;
  }
  &::after {
    content: '';
    display: block;
    width: 90%;
    height: 1px;
    border-top: 1px solid #e6e6e6;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
.close-btn {
  padding: 20px 30px;
  img {
    width: 20px;
  }
}
.nav-transition-enter-active,
.nav-transition-leave-active {
  transform: translateX(0);
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 0.3s ease;
}
.nav-transition-enter,
.nav-transition-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
