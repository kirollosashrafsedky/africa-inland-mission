<template>
  <div>
    <common-header bg="secondary">
      <template #page-heading>African Kindergarten</template>
      <template #page-subtitle>Thursday, July 9, 2020</template>
      <template #page-additional-info>
        <NuxtLink to="/families" class="btn primary bordered"
          >View All Families</NuxtLink
        >
      </template>
    </common-header>
    <b-container class="pb-5">
      <div class="max-900 mx-auto">
        <div class="main-img-wrapper-outer mb-5" data-aos="zoom-in-up">
          <div
            class="main-img-wrapper"
            :style="`
            background-image: url('${require('~/assets/imgs/jpg/families/new-african-kindergarten.jpg')}');
          `"
          ></div>
        </div>
        <div
          class="
            d-flex
            flex-column flex-sm-row
            text-center text-sm-left
            align-items-center align-items-sm-start
            my-5
            pt-4
          "
        >
          <NuxtLink to="#" class="leader-img-link mr-sm-4 mb-4 mb-sm-0">
            <img
              src="~/assets/imgs/jpg/people/americo-bogan.jpg"
              alt="americo-bogan"
              class="img-fluid"
            />
          </NuxtLink>
          <div class="leader-content flex-1" data-aos="fade-left">
            <h3 class="roboto-bold mb-1">Norjela Bogan</h3>
            <p class="roboto-bold position mb-1">Cause Leader</p>
            <p class="open-sans-regular">
              There are only two ways to live your life. One as if all that
              matters is to have someone love and accept you. The other is as
              though loving and accepting another person is all that matters.
              Often, when you choose the second you get the first.
            </p>
          </div>
        </div>
        <div class="donation-progress-wrapper mb-4">
          <div
            class="donation-progress"
            style="width: 80%"
            data-aos="slide-right"
          ></div>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center">
          <div class="donation" data-aos="fade-up">
            <p class="mb-2">Donations:</p>
            <p class="">
              <span class="donation-red">$5,000</span> /
              <span>$12,000</span>
            </p>
          </div>
          <p
            class="percent text-right align-self-center"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            80%
          </p>
        </div>
        <article data-aos="fade-left" data-aos-duration="800">
          <h2>Accusantium saepe beatae in dolorem velit.</h2>
          <p>
            Id et veniam quae. Nostrum facere repellendus minus quod aut aliquam
            neque reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
            repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
            Velit eius ab delectus temporibus.
            <br />
            For dynamic content, add a rich text field to any collection and
            then connect a rich text element to that field in the settings
            panel. Headings, paragraphs, block-quotes, figures, images, and
            figure captions can all be styled.
          </p>
          <h3>We love design beautiful things.</h3>
          <p>
            Headings, paragraphs, blockquotes, figures, images, and figure
            captions can all be styled after a class is added to the rich text
            element using the "When inside of" nested selector system. A rich
            text element can be used with static or dynamic content. For static
            content, just drop it into any page and begin editing. ‍<br /><br />

            The rich text element allows you to create and format headings,
            paragraphs, blockquotes, images, and video all in one place instead
            of having to add and format them individually. Just double-click and
            easily create content.
          </p>
          <h3>How to customize formatting for each rich text.</h3>
          <p>
            The rich text element allows you to create and format headings,
            paragraphs, blockquotes, images, and video all in one place instead
            of having to add and format them individually. A rich text element
            can be used with static or dynamic content. For static content, just
            drop it into any page and begin editing. For dynamic content, add a
            rich text field to any collection and then connect a rich text
            element to that field in the settings panel. Voila! ‍
          </p>
          <blockquote>
            A rich text element can be used with static or dynamic content. For
            static content, just drop it into any page and begin editing.
          </blockquote>

          <p>
            Fugiat quia vero nemo molestiae. Aliquid aut corporis esse dolorem
            enim alias. Earum ipsum eaque et dolorem praesentium dolor quasi.
            Ipsum adipisci omnis voluptatem omnis dolorem voluptates cumque
            sint. Error veritatis expedita quo corrupti aliquam est laboriosam
            consequuntur et.
            <br />
            Laborum qui laudantium quo harum molestiae ea tenetur et at. Maiores
            est quia nesciunt recusandae. Facere hic deleniti repudiandae dolor
            quod eum quas eius corporis.
          </p>
        </article>
        <donate-today class="mb-5" />
      </div>
    </b-container>
    <section class="light-bg py-5">
      <b-container class="text-center">
        <p class="mb-1 roboto-medium secondary-text sub-title">MORE CAUSES</p>
        <h2 class="mb-5">You Might Also Like</h2>
        <b-row no-gutters>
          <b-col
            v-for="family in families"
            :key="family.url"
            cols="12"
            lg="6"
            data-aos="fade-up"
          >
            <family-card :data="family" />
          </b-col>
        </b-row>
        <div class="text-center mt-4">
          <NuxtLink to="/families" class="btn secondary bordered"
            >View More Causes</NuxtLink
          >
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import CommonHeader from '~/components/common/CommonHeader.vue'
import DonateToday from '~/components/families/DonateToday.vue'
import FamilyCard from '~/components/families/FamilyCard.vue'
export default {
  components: { CommonHeader, FamilyCard, DonateToday },
  data() {
    return {
      // api will be called insetad of the fammilies object to call only 4 families as suggestions
      families: [
        {
          title: 'African Kindergarten',
          url: 'new-african-kindergarten',
          date: 'Thursday, July 9, 2020',
          img: 'new-african-kindergarten.jpg',
          earned: '$5,000',
          total: '$12,000',
          percent: 60,
        },
        {
          title: 'Clean Water For All',
          url: 'clean-water-for-all',
          date: 'Thursday, July 9, 2020',
          img: 'clean-water-for-all.jpg',
          earned: '$7,000',
          total: '$10,000',
          percent: 50,
        },
        {
          title: 'Our Charity Budget',
          url: 'the-upcoming-charity-budget',
          date: 'Thursday, July 9, 2020',
          img: 'the-upcoming-charity-budget.jpg',
          earned: '$5,000',
          total: '$9,000',
          percent: 70,
        },
        {
          title: 'New School Teachers',
          url: 'new-school-teachers',
          date: 'Thursday, July 9, 2020',
          img: 'new-school-teachers.jpg',
          earned: '$8,000',
          total: '$15,000',
          percent: 80,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/includes/component-includes';
.btn.primary {
  color: $textWhite;
  border-color: $textWhite;
  background-color: rgba(255, 255, 255, 0.15);
  &:hover {
    color: $textWhite;
    background-color: $primaryColor;
    border-color: $primaryColor;
  }
}
.max-900 {
  max-width: 900px;
}
.main-img-wrapper-outer {
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  margin-top: -50px;
  .main-img-wrapper {
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    @include media-sm {
      height: 400px;
    }
    @include media-md {
      height: 500px;
    }
  }
  @include media-xs {
    margin-top: -70px;
    padding: 15px;
  }
  @include media-sm {
    margin-top: -100px;
    padding: 20px;
  }
  @include media-md {
    margin-top: -120px;
  }
}
.leader-img-link {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #dae6de;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.leader-content {
  h3 {
    font-size: 20px;
  }
  p {
    color: #3b4c3d;
    font-size: 15px;
    line-height: 25px;
    &.position {
      color: $primaryColor;
      font-size: 16px;
    }
  }
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
  width: 65px;
  padding: 10px 0;
  font-size: 16px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 4px;
  background-color: #66b96b;
  color: #fff;
  font-family: $RobotoFont;
  font-weight: map-get($RobotoWeights, 'bold');
  box-shadow: 4px 4px 17px 0 rgba(46, 50, 60, 0.18);
  @include media-sm {
    width: 80px;
    height: 40px;
    padding: 11px 0;
    font-size: 18px;
  }
}
.donation-progress-wrapper {
  width: 100%;
  height: 10px;
  border-radius: 4px;
  background-color: #e6e6e6;
  overflow: hidden;
  .donation-progress {
    background-color: $secondaryColorText;
    height: 100%;
    width: 0;
  }
}
article {
  line-height: 25px;
  padding: 30px 0;
  h2 {
    font-size: 30px;
    line-height: 44px;
    margin-bottom: 10px;
    @include media-sm {
      font-size: 34px;
    }
  }
  h3 {
    font-size: 22px;
    line-height: 32px;
    margin: 30px 0 10px 0;
  }
  p {
    font-size: 15px;
    font-family: $OpenSansFont;
    font-weight: map-get($OpenSansWeights, 'regular');
    color: $textDark2;
  }
  blockquote {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px 20px;
    border-left: 5px solid #66b96b;
    font-weight: map-get($OpenSansWeights, 'regular');
    font-family: $OpenSansFont;
    color: #000;
    font-size: 24px;
    line-height: 34px;
  }
}
</style>
