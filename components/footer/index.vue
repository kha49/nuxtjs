<template>
  <div class="footer">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-3">
            <div class="logo">
              <img src="~/assets/images/Logo-Safin-02.png" alt="Logo">
            </div>
          </div>
          <div class="col-xs-12 col-md-9">
            <div class="row">
              <div class="col-xs-12 col-md-3">
                <div class="footer__title">
                  Sản phẩm
                </div>
                <div class="footer__list">
                  <nuxt-link to="/">
                    Trái phiếu Novaland
                  </nuxt-link>
                  <nuxt-link to="/">
                    Trái phiếu Kinh Bắc
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xs-12 col-md-3">
                <div class="footer__title">
                  Về Safin
                </div>
                <div class="footer__list">
                  <nuxt-link to="/">
                    Giới thiệu
                  </nuxt-link>
                  <nuxt-link to="/">
                    Tin tức
                  </nuxt-link>
                  <nuxt-link to="/">
                    Liên hệ
                  </nuxt-link>
                  <nuxt-link to="/">
                    Tuyển dụng
                  </nuxt-link>
                  <nuxt-link to="/">
                    Hỏi & đáp
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xs-12 col-md-3">
                <div class="footer__title">
                  Dịch vụ
                </div>
                <div class="footer__list">
                  <nuxt-link to="/">
                    Tư vấn tái cấu trúc Doanh nghiệp
                  </nuxt-link>
                  <nuxt-link to="/">
                    Thu xếp & Phát hành
                  </nuxt-link>
                  <nuxt-link to="/">
                    Phân phối Trái phiếu
                  </nuxt-link>
                  <nuxt-link to="/">
                    Tư vấn M&A
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xs-12 col-md-3">
                <div class="footer__title">
                  Liên kết
                </div>
                <div class="footer__list">
                  <nuxt-link to="/">
                    Facebook
                  </nuxt-link>
                  <nuxt-link to="/">
                    YouTube
                  </nuxt-link>
                  <nuxt-link to="/">
                    Twitter
                  </nuxt-link>
                  <nuxt-link to="/">
                    Linked
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="all-right">
          © 2020 Safin. All rights reserved
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
.footer {
  padding: 100px 0;
  background-color: $gray-light;

  .logo {
    img {
      width: 150px;
    }
  }

  &__title {
    font-size: 16px;
    font-family: $font-main;
    font-weight: bold;
    margin-bottom: 25px;
    color: $black;
  }

  &__list {
    margin-bottom: 120px;

    a {
      display: block;
      margin-bottom: 20px;
    }
  }
}
</style>
