<template>
  <div class="product-item">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <div class="product-item__infor">
            <div class="product-item__infor__name">
              {{ product.IssuingOrganizationName || '' }} {{ `(${product.IssuingOrganizationCode || ''})` }}
            </div>
            <div class="product-item__infor__subname">
              {{ product.IssuingSummary || '' }}
            </div>
            <div class="product-item__infor__item devide">
              <p class="label">
                Tổng giá trị phát hành
              </p>
              <p class="value">
                {{ product.TotalValue || '' }} tỷ đồng
              </p>
            </div>
            <div class="product-item__infor__item devide">
              <p class="label">
                Lãi suất
              </p>
              <p class="value">
                {{ product.InterestBondDescription || '' }}
              </p>
            </div>
            <div class="product-item__infor__item devide">
              <p class="label">
                Kỳ thanh toán lãi
              </p>
              <p class="value">
                {{ product.TermDescription || '' }}
              </p>
            </div>
            <div class="product-item__infor__item devide">
              <p class="label">
                Tỷ lệ TSĐB
              </p>
              <p class="value">
                {{ product.CollateralRate || '' }}
              </p>
            </div>
            <div class="product-item__infor__item devide">
              <p class="label">
                Tỷ lệ duy trì TSĐB
              </p>
              <p class="value">
                {{ product.CollateralHoldOnRate || '' }}
              </p>
            </div>
            <div class="product-item__infor__item">
              <p class="label">
                Mệnh giá
              </p>
              <p class="value">
                {{ product.FaceValue || '' }} vnđ
              </p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <div class="product-item__invest">
            <div class="product-item__invest__image">
              <div class="abc" />
              <img :src="product.UrlImage" alt="publisher image">
            </div>
            <div class="product-item__invest__description container">
              <div class="row">
                <div class="col-sm-4">
                  <div class="about-publisher icon">
                    <div class="image">
                      <img src="~/assets/images/Group 53.png" alt="publisher">
                    </div>
                    <p>Giới thiệu nhà phát hành</p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="financial-report icon">
                    <div class="image">
                      <img src="~/assets/images/Group 50.png" alt="report">
                    </div>
                    <p>Báo cáo tài chính</p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <button class="btn" @click="navigate(product.ProductId)">
                    Đầu tư ngay <i class="fal fa-arrow-right" />
                  </button>
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
  name: 'ProductItem',
  props: {
    product: {
      default: () => {},
      type: Object,
      require: true
    }
  },
  methods: {
    navigate (id) {
      this.$router.push(`/product-detail/${id}`)
    }
  }
}
</script>

<style lang="scss">
.product-item {
  margin-top: 120px;

  &__infor {
    @include media-breakpoint-up(md) {
      padding-right: 40px;
    }

    &__name {
      font-family: $font-main-bold;
      font-weight: bold;
      font-size: 30px;

      @include media-breakpoint-up(md) {
        font-size: 24px;
      }

      &:hover {
        color: $black;
      }
    }

    &__subname {
      margin-bottom: 30px;
      font-size: 14px;

      @include media-breakpoint-up(md) {
        margin-bottom: 30px;
        font-size: 20px;
      }
    }

    &__item {
      display: flex;
      justify-content: space-between;

      .label {
        margin-bottom: 20px;
        font-size: 14px;

        @include media-breakpoint-up(md) {
          font-size: 20px;
        }
      }

      .value {
        font-weight: bold;
        font-size: 14px;

        @include media-breakpoint-up(md) {
          font-size: 22px;
        }
      }

      &.devide {
        border-bottom: 1px solid $gray;
        margin-bottom: 20px;
      }
    }
  }

  &__invest {
    border-radius: 5px;

    @include media-breakpoint-up(md) {
      padding-left: 40px;
    }

    &__image {
      position: relative;
      width: 100%;
      padding-top: 75%;
      overflow: hidden;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;

      img {
        position:  absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        transform: scale(2);
      }
    }

    &__description {
      background-color: $white;
      display: flex;
      padding: 25px;
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;

      .row {
        width: 100%;
        align-items: center;
      }

      .icon {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        @include media-breakpoint-up(md) {
          margin: 0;
        }

        p {
          font-size: 15px;
        }

        .image {
          margin-right: 10px;
        }

        img {
          width: 30px;
        }
      }

      .btn {
        text-align: center;
        font-size: 15px;
        display: flex;
        align-items: center;
        font-family: $font-main;

        i {
          color: $white;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
