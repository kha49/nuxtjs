<template>
  <div class="banner-product">
    <div class="banner-product__wrapper" :style="{ backgroundImage : `url(${banners.UrlBanner})`}">
      <div class="container">
        <div class="content">
          <div class="logo">
            <img :src="banners.UrlImage" alt="logo">
          </div>
          <div class="title">
            <p>Tập đoàn phát triển</p>
            <p>Bất động sản hàng đầu phía nam</p>
          </div>
          <div class="subtitle">
            <p>Trên quỹ đất hiện có khoảng hơn 5.400 ha, Novaland phát triển 03 dòng sản phẩm chủ lực, gồm: Bất động sản Đô thị, BĐS Đô thị Du lịch, và BĐS Công nghiệp.</p>
          </div>
          <button class="btn">
            <img src="~/assets/images/Group 50.png" alt="report">
            Thông tin chi tiết
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerProductDetail',
  props: {
    banners: {
      default: () => {},
      type: Object
    }
  },
  watch: {
    banners () {
      console.log('this.banner :>> ', this.banner)
    }
  },
  mounted () {
    console.log('banners :>> ', this.banners)
  }
}
</script>

<style lang="scss">
.banner-product {
  position: relative;
  margin-top: 80px;
  overflow-x: hidden;

  @include media-breakpoint-up(md) {
    margin-top: 0;
  }

  &__wrapper {
    background-image: url('~assets/images/banner-product.jpg');
    background-repeat: no-repeat;
    background-position: bottom right;
    min-height: 500px;
    background-size: 900px 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @include media-breakpoint-up(md) {
      min-height: 800px;
      background-size: 1920px 800px;
    }

    .logo {
      margin-bottom: 35px;

      @include media-breakpoint-up(md) {
        margin-bottom: 70px;
      }

      img {
        width: 150px;
      }
    }
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
    color: $white;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;

    @include media-breakpoint-up(md) {
      font-size: 50px;
    }
  }

  .subtitle {
    font-size: 14px;
    margin-bottom: 60px;

    @include media-breakpoint-up(md) {
      font-size: 28px;
    }
  }

  .btn {
    font-weight: normal;
    img {
      width: 20px;
      margin-right: 10px;
    }
  }
}
</style>
