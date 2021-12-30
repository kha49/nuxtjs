<template>
  <div class="achievement">
    <div class="container">
      <h2 class="title">
        Thành tựu đã đạt được
      </h2>
      <div class="row">
        <div class="col-xs-12 col-md-8">
          <div class="achievement__image">
            <img src="~/assets/images/circle.png" alt="shutterstock" class="achievement__image__bg">
            <img src="~/assets/images/shutterstock@2x.png" alt="shutterstock" class="achievement__image__cup">
          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="achievement__infor">
            <div class="achievement__infor__item devide">
              <p class="value">
                15.000 tỷ
              </p>
              <p class="description">
                Tổng mệnh giá trái phiếu đã phân phối
              </p>
            </div>
            <div class="achievement__infor__item devide">
              <p class="value">
                10.000
              </p>
              <p class="description">
                Tổng số Khách hàng cá nhân đã đầu tư
              </p>
            </div>
            <div class="achievement__infor__item">
              <p class="value">
                200%
              </p>
              <p class="description">
                Tốc độ tăng trưởng trong năm 2021
              </p>
            </div>
          </div>
          <button class="btn">
            Tìm hiểu lý do <i class="fal fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.achievement {
  background-color: $white;
  padding-top: 85px;

  &__image {
    position: relative;
    width: 100%;
    padding-top: 100%;

    &:hover {
      .achievement__image__cup {
        transform: translate(-50%, -50%) scale(1.3);
      }
    }

    &__bg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    &__cup {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      transform: translate(-50%, -50%);
      transition: 0.3s ease-in-out;
    }
  }

  &__infor {
    margin-bottom: 65px;
    &__item {
      &.devide {
        border-bottom: 1px solid $gray;
        margin-bottom: 20px;
      }

      .value {
        font-family: $font-main-bold;
        font-size: 50px;
        margin-bottom: 15px;
      }

      .description {
        font-size: 22px;
        color: $gray-dark;
        margin-bottom: 30px;
        font-family: $font-svn-product;
      }
    }
  }

  .btn {
    font-size: 15px;
  }
}
</style>
