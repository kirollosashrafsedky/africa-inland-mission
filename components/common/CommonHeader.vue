<template>
  <header :class="bg" class="d-flex align-items-center">
    <b-container
      class="
        d-flex
        justify-content-center
        align-items-center
        text-center
        flex-column
      "
    >
      <div
        class="
          max-550
          d-flex
          justify-content-center
          align-items-center
          flex-column
        "
      >
        <h1 class="my-4"><slot name="page-heading"></slot></h1>
        <p class="subtitle mb-4 open-sans-regular">
          <slot name="page-subtitle"></slot>
        </p>

        <nav v-if="breadcrumb.length" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li
              v-for="item in breadcrumb"
              :key="item.name"
              class="breadcrumb-item"
              :class="{ active: item.current }"
            >
              <NuxtLink v-if="!item.current" :to="item.link">{{
                item.name
              }}</NuxtLink>
              <span v-else>{{ item.name }}</span>
            </li>
          </ol>
        </nav>
        <div>
          <slot name="page-additional-info"></slot>
        </div>
      </div>
    </b-container>
  </header>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: 'secondary',
    },
    breadcrumb: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
header {
  min-height: 400px;
  padding: 80px 0;
  &.primary {
    background-color: $primaryColor;
  }
  &.secondary {
    background-color: $secondaryColorBg;
  }
  @include media-sm {
    min-height: 500px;
  }
}

.max-550 {
  max-width: 550px;
}

h1 {
  font-size: 36px;
  color: $textWhite;
  line-height: 54px;
  @include media-sm {
    font-size: 44px;
  }
}

p.subtitle {
  font-size: 16px;
  color: #f0f2fa;
  line-height: 26px;
}

.breadcrumb {
  background-color: hsla(0, 0%, 100%, 0.11);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 6px 12px;
  border-radius: 8px;
  .breadcrumb-item {
    font-size: 14px;
    color: #fff;
    font-family: $RobotoFont;
    padding-left: 0;
    &.active {
      color: #e2e6e3;
      font-family: $OpenSansFont;
    }
    & + &::before {
      content: '>';
    }
  }
  .breadcrumb-item + .breadcrumb-item::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-left: 5px;
    background-image: url('~/assets/imgs/svg/icons/breadcrumb-arrow.svg');
    background-position: center;
    background-size: 40%;
    background-repeat: no-repeat;
    float: none;
    padding: 0;
    opacity: 0.8;
    vertical-align: middle;
  }
}
</style>
