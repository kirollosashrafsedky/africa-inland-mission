<template>
  <div>
    <form class="inline-form">
      <input
        type="text"
        class="form-control"
        placeholder="Your email address"
      />
      <button class="btn primary bordered">Subscribe</button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
form {
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  padding: 2px;
  .form-control {
    padding: 15px 8px;
    flex: 1;
    border-width: 0;
    background-color: transparent;
    &::-webkit-input-placeholder {
      text-align: center;
      color: rgba($color: #000000, $alpha: 0.4);
      font-weight: map-get($OpenSansWeights, 'regular');
    }
    &::-ms-input-placeholder {
      text-align: center;
      color: rgba($color: #000000, $alpha: 0.4);
      font-weight: map-get($OpenSansWeights, 'regular');
    }
    &::placeholder {
      text-align: center;
      color: rgba($color: #000000, $alpha: 0.4);
      font-weight: map-get($OpenSansWeights, 'regular');
    }
  }
}

@include media-xs {
  form {
    flex-direction: row;
    align-items: center;
    padding: 2px 2px 2px 20px;
    .form-control {
      padding: 0;
      &::-webkit-input-placeholder {
        text-align: left;
      }
      &::-ms-input-placeholder {
        text-align: left;
      }
      &::placeholder {
        text-align: left;
      }
    }
  }
}
</style>
