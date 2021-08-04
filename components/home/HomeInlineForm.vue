<template>
  <b-container fluid>
    <div class="wrapper">
      <div
        class="
          d-flex
          align-items-lg-end align-items-start
          flex-column flex-lg-row
        "
      >
        <p class="roboto-bold mr-0 mr-lg-3 mb-4 mb-lg-0">
          Delivering help <br />
          and hope to children
        </p>
        <form class="inline-form">
          <b-row no-gutters class="align-items-end">
            <b-col cols="12" lg="4">
              <div class="form-group mb-0 px-lg-2 mb-3 mb-lg-0">
                <label class="roboto-bold">Name</label>
                <input type="text" name="name" class="form-control" />
              </div>
            </b-col>
            <b-col cols="12" lg="4">
              <div class="form-group mb-0 px-lg-2 mb-3 mb-lg-0">
                <label class="roboto-bold"> Email Address</label>
                <input type="email" name="email" class="form-control" />
              </div>
            </b-col>
            <b-col cols="12" lg="4" class="px-lg-2 mb-3 mb-lg-0">
              <button class="btn primary bordered py-2 w-100" @click.prevent>
                Submit
              </button>
            </b-col>
          </b-row>
        </form>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
.wrapper {
  background-color: #fff;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  border-radius: 12px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -100px;
  padding: 30px;
  p {
    font-size: 18px;
    line-height: 28px;
  }
}
form {
  width: 100%;
  &::v-deep .btn {
    height: 55px;
  }
}
.container-fluid {
  padding: 0 25px;
}

@include media-sm {
  .wrapper {
    width: 90%;
    padding: 50px;
  }
}

@include media-md {
  .wrapper {
    width: 80%;
  }
}

@include media-lg {
  .wrapper {
    p {
      width: 25%;
    }
    width: 80%;
  }
}

@include media-xl {
  .wrapper {
    width: 70%;
  }
}
</style>
