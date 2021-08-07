<template>
  <div class="wrapper text-center">
    <h2 class="mb-3">Donate Today</h2>
    <p class="mb-5 roboto-medium secondary-text sub-title">
      EVERY DOLLAR COUNTS
    </p>

    <form @submit.prevent>
      <div class="form-group mb-3">
        <input
          type="number"
          name="amount"
          class="form-control"
          placeholder="$"
        />
      </div>
      <button class="btn bordered primary btn-block" type="submit">
        Place Donation
      </button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
.wrapper {
  margin-top: 60px;
  padding: 25px 20px 25px;
  border: 1px solid #dae6de;
  border-radius: 10px;
  background-color: #f2f5f3;
  box-shadow: 0 20px 20px 0 rgb(0, 0, 0, 0.1);
  .form-control {
    background-color: #fff;
    &:focus,
    &:focus-within {
      background-color: #fff;
    }
  }
  @include media-sm {
    padding: 50px 40px 40px;
  }
}
</style>
