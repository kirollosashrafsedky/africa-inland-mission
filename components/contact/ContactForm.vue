<template>
  <div>
    <b-container class="d-flex justify-content-center">
      <div class="wrapper">
        <div class="content">
          <b-row>
            <b-col cols="12" md="6" class="mb-4">
              <h3 class="mb-3" data-aos="fade-up" data-aos-duration="800">
                Contact us
              </h3>
              <p
                class="open-sans-regular sub-heading"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="50"
              >
                Doing nothing for others is the undoing of ourselves.
              </p>
            </b-col>

            <b-col cols="12" md="6" class="contact-info">
              <p
                class="d-flex align-items-start mb-3"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <img
                  src="~/assets/imgs/svg/icons/contact-location.svg"
                  alt="location"
                  class="mr-3 contact-icon"
                />
                <span>Manhattan, New York. 110111USA</span>
              </p>
              <p
                class="d-flex align-items-start mb-3"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="50"
              >
                <img
                  src="~/assets/imgs/svg/icons/contact-email.svg"
                  alt="email"
                  class="mr-3 contact-icon"
                />
                <span>kayan@template.com</span>
              </p>
              <p
                class="d-flex align-items-start mb-3"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <img
                  src="~/assets/imgs/svg/icons/contact-phone.svg"
                  alt="phone"
                  class="mr-3 contact-icon"
                />
                <span>+1 (929) 500 12345</span>
              </p>
            </b-col>
          </b-row>
          <hr />
          <form @submit.prevent>
            <b-row>
              <b-col cols="12" md="6">
                <div class="form-group mb-3" data-aos="zoom-in-up">
                  <label> Name: </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your name"
                  />
                </div>
              </b-col>
              <b-col cols="12" md="6">
                <div class="form-group mb-3" data-aos="zoom-in-up">
                  <label> Last Name: </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your last name"
                  />
                </div>
              </b-col>
              <b-col cols="12">
                <div class="form-group mb-3" data-aos="zoom-in-up">
                  <label> Email: </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your email"
                  />
                </div>
              </b-col>
              <b-col cols="12">
                <div class="form-group mb-3" data-aos="zoom-in-up">
                  <label> Subject: </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your subject"
                  />
                </div>
              </b-col>
              <b-col cols="12">
                <div class="form-group mb-3" data-aos="zoom-in-up">
                  <label> Message: </label>
                  <textarea
                    rows="4"
                    class="form-control"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
              </b-col>
              <b-col cols="12">
                <button
                  type="submit"
                  class="btn primary bordered btn-block"
                  data-aos="zoom-in-up"
                >
                  Submit
                </button>
              </b-col>
            </b-row>
          </form>
        </div>
        <iframe
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2334.3812327631254!2d-0.1220126843428034!3d51.51121397963576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzQwLjQiTiAwwrAwNycxMS40Ilc!5e1!3m2!1sen!2seg!4v1628196458627!5m2!1sen!2seg"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
.wrapper {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 7px 7px 25px 0 rgba(82, 91, 115, 0.12);
  max-width: 650px;
  width: 100%;
  border: 1px solid rgba(228, 236, 246, 0.57);
  overflow: hidden;
  .content {
    padding: 20px;
    @include media-sm {
      padding: 50px;
    }
  }
}
.map {
  width: 100%;
  height: 300px;
  margin-bottom: -5px;
}
h3 {
  font-size: 20px;
  line-height: 30px;
}

.sub-heading {
  line-height: 25px;
  font-size: 15px;
  color: $textDark2;
}

.contact-info {
  p {
    font-family: $OpenSansFont;
    line-height: 20px;
    font-size: 14px;
  }
  .contact-icon {
    width: 18px;
  }
}

hr {
  border-top: 2px solid #dae6de;
}

form {
  label {
    font-size: 12px;
    font-weight: map-get($RobotoWeights, 'bold');
    margin-bottom: 8px;
  }
  .form-control {
    height: 45px;
    font-size: 14px;
  }
  textarea.form-control {
    height: auto;
  }
}
</style>
