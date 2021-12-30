<template>
  <Container>
    <div class="header">
      <header>
        <div class="container">
          <div class="header__wrapper">
            <div class="header__wrapper__logo">
              <img src="~/assets/images/Logo-Safin-02.png" alt="Logo">
            </div>
            <div class="header__wrapper__hamburger" @click="openMenuHandler">
              <i class="far fa-bars" />
            </div>
            <div
              :class="
                'header__wrapper__navigation ' +
                  (activeMenuMobile ? 'active' : '')
              "
            >
              <div class="close-menu" @click="closeMenuHandler">
                <i class="fal fa-times" />
              </div>
              <nav>
                <ul>
                  <li>
                    <nuxt-link to="/">
                      Sản phẩm
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/">
                      Dịch vụ
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/">
                      Học viện đầu tư
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/">
                      Giới thiệu
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/">
                      Tin tức
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/">
                      Liên hệ
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
              <button class="btn">
                Đầu tư ngay
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        :class="'overlay ' + (activeMenuMobile ? 'active' : '')"
        @click="closeMenuHandler"
      />
    </div>
  </Container>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeMenuMobile: false
    }
  },
  methods: {
    openMenuHandler () {
      this.activeMenuMobile = true
    },

    closeMenuHandler () {
      this.activeMenuMobile = false
    }
  }
}
</script>

<style lang="scss">
.header {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 2;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @include min-lg {
    background-color: transparent;
    box-shadow: none;
    position: static;

    &.active {
      background-color: white;
    }
  }

  &__wrapper {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    &__logo {
      img {
        width: 150px;
      }
    }

    &__hamburger {
      display: flex;
      align-items: center;

      @include min-lg {
        display: none;
      }

      .fa-bars {
        padding: 10px;

        &::before {
          font-size: 25px;
          color: gray;
        }
      }
    }

    &__navigation {
      position: fixed;
      top: 0;
      bottom: 0;
      right: -280px;
      width: 280px;
      background-color: white;
      height: 100vh;
      z-index: 10;
      transition: 0.35s ease-in-out;

      &.active {
        right: 0;
      }

      @include min-lg {
        display: flex;
        position: static;
        background-color: transparent;
        width: auto;
        height: auto;
      }

      .close-menu {
        display: flex;
        justify-content: flex-end;
        padding: 10px 20px;

        @include min-lg {
          display: none;
        }

        .fa-times:before {
          font-size: 25px;
          color: gray;
        }
      }

      nav {
        display: flex;
        align-items: center;
        margin-right: 75px;

        ul {
          display: block;
          list-style: none;

          @include min-lg {
            display: flex;
          }

          li {
            margin: 25px;

            @include min-lg {
              margin: 0 12px;
            }

            @include min-xl {
              margin: 0 25px;
            }

            a {
              color: black;
            }
          }
        }
      }

      .btn {
        display: block;
        margin: 0 auto;

        @include min-lg {
          margin: 0;
        }
      }
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100vh;
    z-index: 1;
    display: none;

    &.active {
      display: block;
    }
  }
}
</style>
