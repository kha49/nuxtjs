<template>
  <div class="banner">
    <div class="banner__image">
      <VueSlickCarousel v-if="banners.length > 0" v-bind="slickOptions">
        <div v-for="(item, id) in banners" :key="id" class="banner__image__item" :style="{ backgroundImage : `url(${item.UrlImageWeb})`}">
          <div class="content container">
            <div class="content__title">
              {{ item.Title }}
            </div>
            <div class="content__subtitle">
              <p>{{ item.Summary }}</p>
            </div>
            <button class="btn">
              Đầu tư ngay
            </button>
            <div v-if="issuingOrganizations.length > 0" class="distribution-bonds">
              <div class="title">
                Trái phiếu đang phân phối
              </div>
              <div class="distribution-bonds__list">
                <div v-for="(ig, id) in issuingOrganizations" :key="id" class="distribution-bonds__list__item">
                  <img :src="ig.UrlLogo" alt="bond">
                </div>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerHomepage',
  props: {
    banners: {
      default: () => [{ UrlImageWeb: '/_nuxt/assets/images/Slide@2x.png', Title: 'Đầu tư', Summary: 'Trái phiếu' }],
      type: Array,
      require: true
    },
    issuingOrganizations: {
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
        slidesToShow: 1,
        arrows: true
      }
    }
  }
}
</script>

<style lang="scss">
.banner {
  position: relative;
  margin-top: 80px;
  overflow-x: hidden;

  @include media-breakpoint-up(md) {
    margin-top: 0;
  }

  &__image {

    &__item {
      background-image: url('~assets/images/Slide@2x.png');
      background-repeat: no-repeat;
      background-position: bottom right;
      min-height: 500px;
      background-size: 900px 500px;
      position: relative;

      @include media-breakpoint-up(md) {
        min-height: 800px;
        background-size: 1920px 800px;
      }
    }
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &__title {
      font-family: $font-main-bold;
      font-size: 32px;
      margin-bottom: 20px;

      @include media-breakpoint-up(md) {
        font-size: 50px;
      }
    }

    &__subtitle {
      font-family: $font-main;
      font-size: 18px;
      margin-bottom: 25px;

      @include media-breakpoint-up(md) {
        font-size: 30px;
        margin-bottom: 45px;
      }
    }

    .btn {
      margin-bottom: 30px;

      @include media-breakpoint-up(md) {
        margin-bottom: 70px;
      }
    }
  }

  .distribution-bonds {
    .title {
      font-size: 15px;
      font-family: $font-main;
      margin-bottom: 30px;
    }

    &__list {
      display: flex;

      &__item {
        margin-right: 40px;
        padding: 30px 55px;
        background-color: $white;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 120px;
        }
      }
    }
  }
}
</style>
