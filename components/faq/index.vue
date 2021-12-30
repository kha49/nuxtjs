<template>
  <div class="faq">
    <div class="container">
      <div class="faq__wrapper">
        <div class="faq__header">
          <div class="faq__header__title">
            <span>
              Những kiến thức và
            </span>
            <h2>
              Câu hỏi thường gặp
            </h2>
          </div>
        </div>
        <div class="faq__section">
          <div class="row">
            <div class="col-xs-12 col-md-3">
              <div class="category">
                <div class="category__title">
                  <h4>
                    Danh mục
                  </h4>
                </div>
                <div v-if="categoryData != null" class="category__list">
                  <div
                    v-for="category in categoryData"
                    :key="category.CategoryId"
                    :title="category.CategoryName"
                    class="category__list__item"
                  >
                    <div class="item-content">
                      <i class="icon" />
                      <nuxt-link to="#" class="item-link" :class="{active: category.active}" @click.native="changeCategoryHandler(category.CategoryCode), event => event.preventDefault()">
                        {{ category.CategoryName || '' }}
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="community__link">
                  <div class="community__link__title">
                    <h4>
                      Cộng đồng Safin
                    </h4>
                    <p>
                      Tham gia cộng đồng Safin để cập nhật kiến thức nhanh nhất
                    </p>
                  </div>
                  <div class="community__link__list">
                    <div class="item-content">
                      <a href="#">
                        <i class="fb-icon" />
                      </a>
                    </div>
                    <div class="item-content">
                      <a href="#">
                        <i class="yt-icon" />
                      </a>
                    </div>
                    <div class="item-content">
                      <a href="#">
                        <i class="zl-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-9">
              <div class="content">
                <el-collapse v-if="questionData != null" accordion>
                  <el-collapse-item v-for="question in questionData" :key="question.QuestionId" :title="question.Title">
                    <div v-html="question.Answer || ''" />
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
          </div>
        </div>
        <div class="faq__contact">
          <h2>
            Bạn vẫn chưa thỏa mãn?
          </h2>
          <a class="contact-btn" href="#">
            Liên hệ Tư vấn viên
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import faqServices from '@/services/modules/faqServices'
export default {
  name: 'Faq',
  data () {
    return {
      questionData: {},
      categoryData: {}
    }
  },
  async fetch () {
    await this.getCategorieList()
    await this.getQuestionList()
  },
  methods: {
    async getCategorieList () {
      try {
        const categoryData = await faqServices.getCategories()
        if (categoryData) {
          this.categoryData = categoryData.data.Data
        }
      } catch (error) {

      }
    },
    async getQuestionList (code) {
      try {
        const questionData = await faqServices.getQaQuestions({
          categoryCode: code ?? ''
        })
        if (questionData) {
          this.questionData = questionData.data.Data
        }
      } catch (error) {

      }
    },
    changeCategoryHandler (code) {
      this.isActive(code)
      this.getQuestionList(code)
    },
    isActive (code) {
      const current = this.categoryData.find(x => x.CategoryCode === code)
      current.active = true
      this.categoryData.forEach((item) => {
        if (item !== current) {
          item.active = false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.faq {
  background-color: $white;

  &__header {
    margin: 100px 0;
    text-align: center;

    &__title {
      span {
        font-family: $font-main-regular;
        color: $yellow;
        font-size: 16px;
      }

      h2 {
        margin-top: 15px;
        font-family: $font-main-bold;
        font-size: 50px;
      }
    }
  }

  &__section {
    position: relative;
    border-bottom: 1px solid $gray-light-1;
    border-top: 1px solid $gray-light-1;

    .category {
      padding: 40px 35px 40px 0;
      min-height: 100%;
      @include media-breakpoint-up(md) {
        border-right: 1px solid $gray-light-1;
      }

      .category__title {
        margin-top: 21px;

        h4 {
          font-size: 18px;
          font-family: $font-svn-product;
          font-weight: bold;
        }
      }

      .category__list {
        margin-top: 24px;

        &__item {
          margin-bottom: 5px;

          .item-content {
            position: relative;
            color: $gray;

            .icon:before {
              content: "-";
              font-size: 30px;
              position: absolute;
              top: -59%;
              font-weight: 200;
            }

            .item-link {
              display: inline-block;
              margin-left: 26px;
              font-size: 16px;
              font-weight: 300;

              &.active {
                color: red;
              }
            }
          }
        }
      }

      .community__link {
        font-family: $font-main;
        margin-top: 50px;

        &__title {
          h4 {
          font-size: 18px;
          font-weight: bold;
          }

          p {
            font-size: 14px;
          }
        }

        &__list {
          display: flex;
          margin-top: 30px;

          .item-content {
            margin-right: 25px;

            i {
              background-repeat: no-repeat;
              padding: 15px;
            }

            .fb-icon {
              background-image: url('~/assets/images/Group 1974.png');
            }

            .yt-icon {
              background-image: url('~/assets/images/Group 1974.png');
              background-position: -61px 0;
            }

            .zl-icon {
              background-image: url('~/assets/images/Group 1975.png');
            }
          }
        }
      }
    }

    .content {
      @include media-breakpoint-up(md) {
        padding: 40px 60px 40px 20px;
      }
    }
  }

  &__contact {
    text-align: center;
    margin: 150px 0;

    h2 {
      margin: 35px;
      font-family: $font-main-bold;
      font-size: 50px;
    }

    .contact-btn {
      margin: 25px 0;
      background: none;
      border: none;
      background-color: $yellow;
      color: $white;
      border-radius: 50px;
      padding: 10px 20px;
      font-size: 16px;
      font-family: $font-main;

      &:hover,
      &:focus {
        color: $red-500;
      }
    }
  }

  .el-collapse {
    border: none;
  }

  .el-collapse-item__header {
    border-color: $gray-light-1;
    font-size: 18px;
    padding: 30px 0;
  }

  .el-collapse-item__header::last-child {
    border: none;
  }

  .el-collapse-item__arrow.is-active {
    transform: rotate(45deg);
  }

  .el-icon-arrow-right:before {
    content: "\2B";
    font-size: 33px;
    color: $yellow;
  }

  .el-collapse-item__content {
    padding: 20px 0 25px 20px;
  }
}
</style>
