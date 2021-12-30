<template>
  <div class="benefit">
    <div class="container">
      <div class="benefit__wrapper">
        <h2 class="benefit__wrapper__title">
          Ưu điểm của Trái phiếu {{ title }}
        </h2>
        <div class="devide" />
        <div class="row benefit__wrapper__list">
          <div class="col-xs-12 col-md-4">
            <div class="content">
              <div class="content__wrapper">
                <div class="content__wrapper__icon">
                  <img src="~/assets/images/Group 458.png" alt="">
                </div>
                <div class="content__wrapper__description">
                  <p>
                    Kỳ hạn đầu tư linh hoạt
                  </p>
                  <strong>3 - 6 - 9 - 12 - 18 tháng</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="content">
              <div class="content__wrapper">
                <div class="content__wrapper__icon">
                  <img src="~/assets/images/Group 459.png" alt="">
                </div>
                <div class="content__wrapper__description">
                  <p>
                    Tính thanh khoản cao,
                  </p>
                  <strong>cam kết mua lại khi đến hạn</strong>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="content">
              <div class="content__wrapper">
                <div class="content__wrapper__icon">
                  <img src="~/assets/images/Group 460.png" alt="">
                </div>
                <div class="content__wrapper__description">
                  <p>
                    Mua, bán dễ dàng trên
                  </p>
                  <strong>nền tảng trực tuyến safin.vn</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.benefit {
  background-color: #f1f1f1;

  &__wrapper {
    padding: 82px 44px;

    .row.benefit__wrapper__list {
      margin: 0 -22px !important;

      .col-md-4 {
        padding: 0 22px;
      }
    }

    &__title {
      width: 321px;
      height: 92px;
      text-align: left;
      font: normal normal bold 34px/46px SFU Futura;
      letter-spacing: 0px;
      color: #000000;
      font-size: 34px;
    }
  }

  .content {
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 10px;
    padding: 120px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    &__wrapper {
      text-align: center;
      margin: 0 auto;

      &__icon {
        width: 107px;
        height: 107px;
        display: flex;
        text-align: center;
        margin: 0 auto;
      }

      &__description {
        margin-top: 50px;
      }
    }
  }

  .devide {
    width: 30px;
    height: 2px;
    background-color: $yellow;
    margin-top: 25px;
    margin-bottom: 25px;

    @include media-breakpoint-up(sm) {
      width: 64px;
      margin-top: 45px;
      margin-bottom: 45px;
    }
  }
}
</style>
