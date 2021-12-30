<template>
  <div class="footer tw-bg-grey-100 tw-py-8">
    <footer>
      <Container>
        <div class="tw-grid tw-grid-cols-6 tw-gap-4">
          <div class="tw-col-start-1 tw-col-end-7 md:tw-col-start-1 md:tw-col-end-2">
            <div class="logo">
              <img src="~/assets/images/Logo-Safin-02.png" alt="Logo">
            </div>
          </div>
          <div class="tw-col-start-1 tw-col-end-7 md:tw-col-start-2 md:tw-col-end-7">
            <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-gap-2">
              <div>
                <div class="footer__title tw-font-bold">
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
              <div>
                <div class="footer__title tw-font-bold">
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
              <div>
                <div class="footer__title tw-font-bold">
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
              <div>
                <div class="footer__title tw-font-bold">
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
      </Container>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
</style>
