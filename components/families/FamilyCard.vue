<template>
  <div class="card-outer">
    <div class="card text-left">
      <b-row no-gutters>
        <b-col cols="12" lg="4" class="mb-4 mb-lg-0 d-flex align-items-center">
          <div
            class="img-wrapper"
            :style="`
              background-image: url('${require('~/assets/imgs/jpg/families/' +
                data.img)}');
            `"
          ></div>
        </b-col>
        <b-col cols="12" lg="8">
          <div class="content d-flex h-100 flex-column justify-content-between">
            <div>
              <h3 class="roboto-bold mb-1">{{ data.title }}</h3>
              <p class="date">{{ data.date }}</p>
            </div>
            <hr />
            <div
              class="
                d-flex
                flex-column flex-lg-row
                justify-content-between
                align-items-lg-center
              "
            >
              <div class="donation">
                <p class="mb-2">Donations:</p>
                <p class="">
                  <span class="donation-red">{{ data.earned }}</span> /
                  <span>{{ data.total }}</span>
                </p>
              </div>
              <p class="percent text-right align-self-lg-center align-self-end">
                {{ data.percent }}%
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
      <NuxtLink
        :to="`/families/${data.url}`"
        class="hidden-link stretched-link"
      ></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
.card-outer {
  padding: 10px 0;
  @include media-lg {
    padding: 10px;
  }
}
.card {
  overflow: hidden;
  padding: 16px;
  @include media-sm {
    padding: 25px;
  }
  border: 1px solid #dae6de;
  border-radius: 10px;
  background-color: #fff;
  transition: box-shadow 0.4s ease;
  text-decoration: none;
  position: relative;
  &:hover {
    box-shadow: 4px 4px 20px 0 rgb(59 77 61 / 15%);
  }
  .hidder-link {
    opacity: 0;
  }
  .img-wrapper {
    border-radius: 10px;
    width: 100%;

    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 250px;
    @include media-lg {
      padding-top: 100%;
      min-height: 0;
    }
  }
  .content {
    @include media-lg {
      padding-left: 25px;
    }
  }
  p {
    line-height: 20px;
  }
  h3 {
    font-size: 20px;
  }
  .date {
    color: $secondaryColorText;
    font-size: 15px;
  }
  hr {
    border: 0;
    border-top: 1px solid #dae6de;
  }
  .donation p {
    font-family: $RobotoFont;
    font-weight: map-get($RobotoWeights, 'bold');
    font-size: 18px;
    color: $textBlack;
    .donation-red {
      color: $primaryColor;
      font-weight: map-get($RobotoWeights, 'medium');
    }
  }
  .percent {
    margin: 0;
    width: 80px;
    height: 40px;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius: 4px;
    background-color: #66b96b;
    color: #fff;
    font-size: 18px;
    font-family: $RobotoFont;
    font-weight: map-get($RobotoWeights, 'bold');
    box-shadow: 4px 4px 17px 0 rgba(46, 50, 60, 0.18);
  }
}
</style>
