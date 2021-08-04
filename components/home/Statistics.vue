<template>
  <section>
    <b-container class="text-center">
      <div class="grid">
        <div class="stat-item">
          <p class="number">1528+</p>
          <p class="primary-text">Donations</p>
        </div>

        <div class="stat-item">
          <p class="number">2.3k</p>
          <p class="primary-text">Volunteers</p>
        </div>
        <div class="stat-item">
          <p class="number">240+</p>
          <p class="primary-text">Missions</p>
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
.grid {
  display: grid;
  border-radius: 10px;
  border: 1px solid #dae6de;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'item-1' 'item-2' 'item-3';

  font-size: 20px;
  .stat-item {
    padding: 40px;
    &:first-of-type {
      grid-area: item-1;
      border-width: 0;

      // border-right: 1px solid #dae6de;
    }
    &:nth-child(2) {
      grid-area: item-2;
      border-top: 1px solid #dae6de;
    }
    &:last-of-type {
      grid-area: item-3;
      border-width: 0;

      border-top: 1px solid #dae6de;

      // border-left: 1px solid #dae6de;
    }
  }
  .number {
    font-weight: map-get($RobotoWeights, 'bold');
    font-size: 36px;
    margin-bottom: 20px;
  }
}

@include media-md {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'item-1 item-3' 'item-2 item-2';
    .stat-item {
      &:first-of-type {
        border-right: 1px solid #dae6de;
      }
      &:last-of-type {
        border-width: 0;
      }
    }
  }
}

@include media-lg {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'item-1 item-2 item-3';
    .stat-item {
      &:nth-child(2) {
        border-width: 0;
      }
      &:last-of-type {
        border-width: 0;
        border-left: 1px solid #dae6de;
      }
    }
  }
}
</style>
