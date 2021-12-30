<template>
  <div v-if="partners.length > 0" class="typical-partner">
    <div class="container">
      <h2 class="title">
        Đối tác tiêu biểu
      </h2>
      <div class="typical-partner__slider">
        <VueSlickCarousel v-bind="slickOptions">
          <div v-for="(partner, id) in partners" :key="id" class="typical-partner__slider__item">
            <img :src="partner.UrlImage" alt="typical partner">
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypicalPartner',
  props: {
    partners: {
      default: () => [],
      type: Array,
      require: true
    }
  },
  data () {
    return {
      slickOptions: {
        infinite: true,
        speed: 500,
        autoplay: true,
        arrows: true,
        slidesToShow: 5,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    }
  },
  mounted () {
    console.log('partners :>> ', this.partners)
  }
}
</script>

<style lang="scss">
.typical-partner {
  background-color: $white;
  padding: 50px 0 30px 0;

  @include media-breakpoint-up(md) {
    padding: 100px 0 50px 0;
  }

  &__slider {
    overflow-x: hidden;

    &__item {
      position: relative;
      width: 100%;
      padding-top: 100%;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 25px;
      }
    }
  }
}
</style>
