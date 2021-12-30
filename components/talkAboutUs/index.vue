<template>
  <div v-if="partnerReviews.length > 0" class="talk-about-us">
    <div class="container">
      <h2 class="title">
        Đối tác nói về <b>Safin</b>
      </h2>
      <div class="row">
        <div class="col-xs-12 col-md-3" />
        <div class="col-xs-12 col-md-9">
          <div class="talk-about-us__slider">
            <VueSlickCarousel v-bind="slickOptions" ref="carousel">
              <div v-for="(pr, id) in partnerReviews" :key="id" class="talk-about-us__slider__item">
                <div class="content">
                  <div class="content__image">
                    <img :src="pr.UrlImage" alt="bond">
                  </div>
                  <div class="content__name">
                    <p>{{ pr.PartnerReviewsName || '' }}</p>
                  </div>
                  <div class="content__position">
                    <p>{{ pr.Title || '' }}</p>
                  </div>
                  <button class="content__video-btn" @click="showVideoHandler(pr.UrlVideo)">
                    Xem video <i class="fal fa-play-circle" />
                  </button>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="Video" :visible.sync="dialogVideoVisible">
      <iframe :src="videoUrl" frameborder="0" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TalkAboutUs',
  props: {
    partnerReviews: {
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
        slidesToShow: 2,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
      videoUrl: '',
      dialogVideoVisible: false
    }
  },
  mounted () {
    console.log('partnerReviews :>> ', this.partnerReviews)
  },
  methods: {
    showVideoHandler (video) {
      this.dialogVideoVisible = true
      this.videoUrl = video
    }
  }
}
</script>

<style lang="scss">
.talk-about-us {
  background-color: $yellow;
  padding: 80px 0;

  @include media-breakpoint-up(md) {
    padding: 90px 0;
  }

  h2.title {
    margin-bottom: 50px;

    &::after {
      background-color: $white;
    }
  }

  .content {
    padding: 0 81px;
    text-align: center;

    @include media-breakpoint-between(md, xl) {
      padding: 0 41px;
    }

    &__image {
      margin-bottom: 45px;
      position: relative;

      &::after {
        content: "";
        width: 100%;
        height: 145px;
        background: transparent linear-gradient(180deg, #F5BC4600 0%, #F5BC46 100%) 0% 0% no-repeat padding-box;
        position: absolute;
        left: 0;
        bottom: 0;
      }

      img {
        @include media-breakpoint-up(md) {
          min-height: 255px;
        }

        @include media-breakpoint-up(lg) {
          min-height: 385px;
        }
      }
    }

    &__name {
      font-size: 20px;
      font-weight: bold;
    }

    &__position {
      font-size: 20px;
      font-style: italic;
      margin-bottom: 35px;
    }

    &__video-btn {
      background: none;
      background-color: $white;
      border: none;
      border-radius: 50px;
      padding: 10px 20px;
    }
  }

  .slick-dots {
    display: flex !important;
    left: 0;
    justify-content: center;
    align-items: center;
    bottom: -50px;

    @include media-breakpoint-up(md) {
      justify-content: flex-start;
      bottom: 0;
      left: -35%;
    }

    li {
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0.6;

      &.slick-active {
        border: 1px solid $white;
        border-radius: 100%;
        opacity: 1;
      }

      button {
        background-color: $white;
        position: absolute;
        border-radius: 100%;
        width: 18px;
        height: 18px;

        &::before {
          display: none;
        }
      }
    }
  }
}
</style>
