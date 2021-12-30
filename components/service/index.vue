<template>
  <div class="service">
    <div class="service-banner">
      <div class="service-banner__image">
        <img src="~/assets/images/service.jpg" alt="banner">
      </div>
      <div class="service-banner__description container">
        <div class="service-banner__description__title">
          Dịch vụ chuyên nghiệp đến từ những chuyên gia trong thị trường
        </div>
      </div>
    </div>
    <div class="container">
      <div class="service__wrapper">
        <div class="main-content">
          <div class="row">
            <div class="col-xs-12 col-md-6 main-content__description">
              <div class="description">
                <b>Mạng lưới Khách hàng doanh nghiệp, khách hàng cá nhân đa dạng, tạo nên lợi thế khác biệt giúp Safin hỗ trợ đắc lực cho các tổ chức</b>
              </div>
            </div>
            <div class="col-xs-12 col-md-6 main-content__img">
              <img src="~/assets/images/Image 9.png" alt="safin.vn">
            </div>
          </div>
        </div>
        <div class="sub-content">
          <div class="sub-content__list">
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <div class="sub-content__list__item">
                  <div class="icon">
                    <img src="~/assets/images/Group 1371.png" alt="safin.vn">
                  </div>
                  <div class="description">
                    <b>Phát hành trái phiếu</b>
                    <p>Là cầu nối giữa các Tổ chức phát hành và các Nhà đầu tư</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-6">
                <div class="sub-content__list__item">
                  <div class="icon">
                    <img src="~/assets/images/Group 1372.png" alt="safin.vn">
                  </div>
                  <div class="description">
                    <b>Phân phối trái phiếu</b>
                    <p>Kênh phân phối trái phiếu doanh nghiệp hiệu quả</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-6">
                <div class="sub-content__list__item">
                  <div class="icon">
                    <img src="~/assets/images/Group 1373.png" alt="safin.vn">
                  </div>
                  <div class="description">
                    <b>Tư vấn M&A</b>
                    <p>Cung cấp dịch vụ, giải pháp toàn diện cho doanh nghiệp</p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-6">
                <div class="sub-content__list__item">
                  <div class="icon">
                    <img src="~/assets/images/Group 1374.png" alt="safin.vn">
                  </div>
                  <div class="description">
                    <b>Tái cấu trúc doanh nghiệp</b>
                    <p>Giúp doanh nghiệp phát triển bền vững</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-wrapper">
          <a class="service-btn" href="">
            Liên hệ Safin ngay <i class="fal fa-arrow-right" />
          </a>
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
.service {
  .service-banner {
    position: relative;

    &__image {
      height: 100%;
      width: 100%;
    }

    &__description {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &__title {
        font-family: $font-main-bold;
        font-size: 50px;
        margin-bottom: 20px;
        max-width: 50%;
      }

      &__subtitle {
        font-family: $font-main;
        font-size: 30px;
        margin-bottom: 45px;
      }

      .btn {
        margin-bottom: 70px;
      }
    }
  }

  &__wrapper {
    position: relative;
    top: -50px;
  }

  .main-content {
    margin-bottom: 52px;
    background: $white 0 0 no-repeat padding-box;
    box-shadow: 0 -6px 10px #70601329;
    padding: 65px 77px 78px 77px;
    border-radius: 10px;

    .row {
      align-items: center;
    }

    &__img {
      padding: 0 22px;

      img {
        border-radius: 5px;
        width: auto;
        height: auto;
      }
    }

    &__description {
      padding-right: 67px;

      .description {
        font-size: 35px;
      }
    }
  }

  .sub-content {

    .row {
      margin: 0 -25px;
    }

    .col-md-6 {
      padding: 0 25px;
      margin-bottom: 52px;
    }

    &__list {
      &__item {
        background: #ffffff 0% 0% no-repeat padding-box;
        border-radius: 10px;
        border: 1px solid #e3e3e3;
        min-height: 100%;
        position: relative;

        .icon {
          margin: 150px 0px;
          display: flex;
          align-items: center;

          img {
            width: auto;
            height: auto;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
          }
        }

        .description {
          text-align: center;
          padding: 0 118px 92px 118px;

          b {
            font-size: 25px;
          }

          p {
            padding: 20px;
            font-size: 20px;
          }
        }
      }
    }
  }

  .btn-wrapper {
    text-align: center;
    margin: 75px 0;
  }

  .service-btn {
    font-size: 15px;
    background: none;
    border: none;
    background-color: $yellow;
    color: $white;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 18px;
    font-family: $font-main;
    font-weight: bold;
  }
}

</style>
