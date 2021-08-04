<template>
  <footer>
    <b-container>
      <b-row>
        <b-col cols="12" lg="7" class="order-1 order-lg-0">
          <b-row>
            <b-col cols="12" sm="6" md="4" class="mb-4 mb-sm-0">
              <h4 class="mb-4">Home</h4>
              <ul>
                <li>
                  <footer-link href="families">Landing vr.1</footer-link>
                </li>
                <li>
                  <footer-link href="families">Landing vr.2</footer-link>
                </li>
                <li>
                  <footer-link href="families">Landing vr.3</footer-link>
                </li>
              </ul>
            </b-col>
            <b-col cols="12" sm="6" md="4" class="mb-4 mb-sm-0">
              <h4 class="mb-4">Company</h4>
              <ul>
                <li>
                  <footer-link href="families">About Us</footer-link>
                </li>
                <li>
                  <footer-link href="families">FAQ Page</footer-link>
                </li>
                <li>
                  <footer-link href="families">Blog</footer-link>
                </li>
                <li>
                  <footer-link href="families">Price Table</footer-link>
                </li>
                <li>
                  <footer-link href="families">Causes</footer-link>
                </li>
                <li>
                  <footer-link href="families">Shop</footer-link>
                </li>
                <li>
                  <footer-link href="families">Contact Us</footer-link>
                </li>
              </ul>
            </b-col>
            <b-col cols="12" sm="6" md="4" class="mb-4 mb-sm-0">
              <h4 class="mb-4">Utility</h4>
              <ul>
                <li>
                  <footer-link href="families">Style Guid</footer-link>
                </li>
                <li>
                  <footer-link href="families">Licences</footer-link>
                </li>
                <li>
                  <footer-link href="families">Password</footer-link>
                </li>
                <li>
                  <footer-link href="families">404 Page</footer-link>
                </li>
                <li>
                  <footer-link href="families">Changelog</footer-link>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" md="8" lg="5" class="order-0 order-lg-1 mb-5 mb-lg-0">
          <h4 class="mb-5">Subscribe to our newsletter</h4>
          <news-letter class="mb-4" />
          <div class="d-flex">
            <footer-link external target="_blank" href="#" square>
              <img
                src="~/assets/imgs/svg/social/facebook-white.svg"
                alt="facebook"
                class="img-fluid"
              />
            </footer-link>
            <footer-link external target="_blank" href="#" square>
              <img
                src="~/assets/imgs/svg/social/instagram-white.svg"
                alt="instagram"
                class="img-fluid"
              />
            </footer-link>
            <footer-link external target="_blank" href="#" square>
              <img
                src="~/assets/imgs/svg/social/google-plus-white.svg"
                alt="google-plus"
                class="img-fluid"
              />
            </footer-link>
            <footer-link external target="_blank" href="#" square>
              <img
                src="~/assets/imgs/svg/social/twitter-white.svg"
                alt="twitter"
                class="img-fluid"
              />
            </footer-link>
          </div>
        </b-col>
      </b-row>
      <div
        class="
          open-sans-regular
          copyrights
          mt-4
          py-4
          d-flex
          flex-column flex-md-row
          align-items-md-center
          justify-content-start justify-content-md-end
        "
      >
        <p class="mb-2 mb-md-0">© Copyright 2020 Kayan</p>
        <span class="separator px-2 d-none d-md-inline-block">|</span>
        <div class="d-flex align-items-center">
          <span>Carefully Crafted by</span>
          <footer-link href="#" external target="_blank" add-class="ml-2"
            >Dorian Hoxha</footer-link
          >
        </div>
      </div>
    </b-container>
  </footer>
</template>

<script>
import NewsLetter from './NewsLetter.vue'
import FooterLink from './Footer-link.vue'
export default {
  components: { NewsLetter, FooterLink },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
footer {
  background-color: $textDark2;
  padding: 60px 0 20px;
}
ul {
  li {
    margin-bottom: 5px;
  }
}
h4 {
  font-size: 20px;
  color: #fff;
}
.copyrights {
  font-size: 14px;
  color: #dae6de;
  border-top: 1px solid #428147;
  .separator {
    color: #666;
  }
}
</style>
