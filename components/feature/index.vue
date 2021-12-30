<template>
  <div class="feature">
    <div class="container">
      <div class="feature__wrapper">
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <h2 class="feature__wrapper__title">
              Tại sao <br> Trái phiếu do Safin phân phối lại An toàn
            </h2>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="row">
              <div class="col-xs-12">
                <div class="feature__wrapper__content">
                  <img src="~/assets/images/Icons-02.png">
                  <p class="description">
                    TCPH là các tập đoàn top đầu, đã niêm yết trên thị trường ck
                  </p>
                </div>
              </div>
              <div class="col-xs-12">
                <div class="feature__wrapper__content">
                  <img src="~/assets/images/Icons-03.png">
                  <p class="description">
                    Kiểm toán độc lập từ các công ty top đầu thế giới (PwC)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="row">
              <div class="col-xs-12">
                <div class="feature__wrapper__content">
                  <img src="~/assets/images/Icons-01.png">
                  <p class="description">
                    Các sản phẩm Trái phiếu đều có tài sản đảm bảo an toàn
                  </p>
                </div>
              </div>
              <div class="col-xs-12">
                <div class="feature__wrapper__content">
                  <img src="~/assets/images/Icons-04.png">
                  <p class="description">
                    Tính thanh khoản cao cam kết mua lại khi đến hạn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="devide" />
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <h2 class="feature__wrapper__title">
              Tối đa hóa lợi nhuận
            </h2>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="feature__wrapper__content">
              <img src="~/assets/images/Icons-02-02.png">
              <p class="description">
                Lãi suất cao <b>10.5%</b>/năm vượt trội so với gửi ngân hàng
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <div class="feature__wrapper__content">
              <img src="~/assets/images/Icons-02-01.png">
              <p class="description">
                Kỳ hạn đầu tư linh hoạt 3,6,9,12,18 tháng
              </p>
            </div>
          </div>
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
.feature {
  &__wrapper {
    padding: 40px 20px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px -6px 10px #70601329;
    border-radius: 10px;
    position: relative;
    top: -50px;

    @include media-breakpoint-up(sm) {
      padding: 82px 44px;
    }

    .devide {
      width: 30px;
      height: 2px;
      background-color: $yellow;
      margin-bottom: 30px;

      @include media-breakpoint-up(sm) {
        width: 64px;
        margin-bottom: 70px;
      }
    }

    &__title {
      font-weight: bold;
      position: relative;
      margin-bottom: 50px;
      font-family: $font-main-bold;

      @include media-breakpoint-up(sm) {
        padding-right: 105px;
        margin-bottom: 0;
      }
    }

    &__content {
      display: flex;
      margin-bottom: 30px;

      @include media-breakpoint-up(sm) {
        margin-bottom: 50px;
      }

      img {
        width: 55px;
        height: 100%;
      }

      p.description {
        margin-left: 20px;
      }
    }
  }

}
</style>
