<template>
  <section>
    <b-container class="text-center">
      <p class="mb-2 roboto-medium secondary-text sub-title">
        ALL A ROUND THE WORLD
      </p>
      <h2 class="mb-5">Our Agency Goals</h2>
      <div class="grid">
        <div class="card" data-aos="fade-up" data-aos-duration="800">
          <img src="~/assets/imgs/png/goals/business.png" alt="Business" />
          <h4>Business</h4>
          <NuxtLink to="#" class="pb-1 learnmore-link stretched-link"
            >LEARN MORE</NuxtLink
          >
        </div>
        <div
          class="card"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="50"
        >
          <img
            src="~/assets/imgs/png/goals/education.png"
            alt="Quality Education"
          />
          <h4>Quality Education</h4>
          <NuxtLink to="#" class="pb-1 learnmore-link stretched-link"
            >LEARN MORE</NuxtLink
          >
        </div>
        <div
          class="card"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <img src="~/assets/imgs/png/goals/health.png" alt="Good Health" />
          <h4>Good Health</h4>
          <NuxtLink to="#" class="pb-1 learnmore-link stretched-link"
            >LEARN MORE</NuxtLink
          >
        </div>
        <div
          class="card"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          <img
            src="~/assets/imgs/png/goals/partnerships.png"
            alt="Partnerships"
          />
          <h4>Partnerships</h4>
          <NuxtLink to="#" class="pb-1 learnmore-link stretched-link"
            >LEARN MORE</NuxtLink
          >
        </div>
        <div
          class="card"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <img src="~/assets/imgs/png/goals/devices.png" alt="Devices" />
          <h4>Devices</h4>
          <NuxtLink to="#" class="pb-1 learnmore-link stretched-link"
            >LEARN MORE</NuxtLink
          >
        </div>
      </div>
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
}
.card {
  border: 1px solid #dae6de;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  align-items: center;
  position: relative;
  h4 {
    font-size: 18px;
    margin-bottom: 30px;
  }
  img {
    width: 100%;
    max-width: 55px;
    margin-bottom: 40px;
    // max-height: 30px;
  }
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

@include media-sm {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@include media-lg {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@include media-xl {
  .grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
