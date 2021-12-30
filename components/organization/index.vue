<template>
  <div v-if="agent.length > 0" class="organization">
    <div class="container">
      <div class="organization__title">
        Các tổ chức tham gia đợt phát hành
      </div>
      <div class="organization__slider">
        <VueSlickCarousel v-bind="slickOptions">
          <div v-for="(ag, id) in agent" :key="id" class="organization__slider__item">
            <div class="content">
              <div class="content__image">
                <img :src="ag.UrlImage" alt="organization">
              </div>
              <div class="content__description">
                <div class="title">
                  {{ ag.AgentReleaseName || '' }}
                </div>
                <div class="text">
                  <p>{{ ag.Content }}</p>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Organization',
  props: {
    agent: {
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
        slidesToShow: 3,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
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
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },
  mounted () {
    console.log('agentReleases :>> ', this.agent)
  }
}
</script>

<style lang="scss">
.organization {
  padding: 80px 0;

  @include media-breakpoint-up(md) {
    padding: 180px 0 0 0;
  }

  &__title {
    font-size: 24px;
    margin-bottom: 35px;

    @include media-breakpoint-up(md) {
      font-size: 34px;
      margin-bottom: 70px;
    }
  }

  &__slider {
    margin: 0 -22px;

    &__item {
      padding: 0 22px;

      .content {
        border: 1px solid $gray-light-1;
        border-radius: 10px;

        &__description {
          padding: 45px 36px;
          background-color: $white;
          border-bottom-right-radius: 10px;
          border-bottom-left-radius: 10px;
        }
      }

      .title {
        margin-bottom: 23px;
        padding-bottom: 23px;
        font-weight: bold;
        font-size: 18px;
        position: relative;

        &::after {
          position: absolute;
          content: "";
          background-color: $black;
          width: 44px;
          height: 1px;
          bottom: 0;
          left: 0;
        }
      }
    }
  }
}
</style>
