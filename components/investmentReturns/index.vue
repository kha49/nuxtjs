<template>
  <div class="investment-returns">
    <div class="container">
      <div class="investment-returns__wrapper">
        <div class="investment-returns__wrapper__title">
          Lợi nhuận các phương án đầu tư
        </div>
        <div class="investment-returns__wrapper__box">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="TrueBond Plus" name="1">
              <div class="row">
                <div class="col-xs-12 col-md-4">
                  <div class="title">
                    Số tiền dự kiến đầu tư
                  </div>
                  <div class="money-invest">
                    <p>50.000.000</p>
                    <el-slider v-model="money" />
                  </div>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="title">
                    Kỳ hạn
                  </div>
                  <el-select v-model="month" placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="title">
                    Lợi tức được nhận
                    <p class="subtitle">
                      đã trừ thuế phí
                    </p>
                  </div>
                  <div class="investment-value">
                    84.000.000
                  </div>
                  <button class="btn">
                    Đầu tư ngay <i class="fal fa-arrow-right" />
                  </button>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="TrueBond Premier" name="2">
              <div class="row">
                <div class="col-xs-12 col-md-4">
                  <div class="title">
                    Số tiền dự kiến đầu tư
                  </div>
                  <div class="money-invest">
                    <p>50.000.000</p>
                    <el-slider v-model="money" />
                  </div>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="title">
                    Kỳ hạn
                  </div>
                  <el-select v-model="month" placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="title">
                    Lợi tức được nhận
                    <p class="subtitle">
                      đã trừ thuế phí
                    </p>
                  </div>
                  <div class="investment-value">
                    84.000.000
                  </div>
                  <button class="btn">
                    Đầu tư ngay <i class="fal fa-arrow-right" />
                  </button>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvestmentReturns',
  data () {
    return {
      activeName: '1',
      money: 0,
      options: [{
        value: 3,
        label: '3 tháng'
      }, {
        value: 6,
        label: '6 tháng'
      }, {
        value: 9,
        label: '9 tháng'
      }, {
        value: 12,
        label: '12 tháng'
      }],
      month: 12
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss">
.investment-returns {
  &__wrapper {
    padding: 132px 0 176px;

    &__title {
      font-size: 34px;
      font-weight: bold;
      margin-bottom: 70px;
    }

    &__box {
      padding: 30px 50px;
      background-color: $white;

      .col-xs-12:not(:last-child) {
        margin-bottom: 30px;
        border-bottom: 1px solid $gray-light;
        padding-bottom: 30px;

        @include media-breakpoint-up(md) {
          margin-bottom: 0;
          border-bottom: none;
        }
      }

      .title {
        font-size: 20px;
        color: $black;
        margin-bottom: 30px;

        .subtitle {
          font-size: 16px;
          font-style: italic;
          opacity: 0.6;
        }
      }

      .money-invest {
        .el-slider {
          padding: 10px 16px;

          &__bar {
            background-color: $yellow;
          }

          &__button {
            background-color: $yellow;
            border: 2px solid $yellow;
            height: 26px;
            width: 26px;
          }
        }
      }

      .el-select {
        width: 100%;
        margin-top: 30px;

        .el-input__inner {
          border-radius: 50px;
        }
      }

      .investment-value {
        margin-bottom: 45px;
        font-size: 30px;
        font-weight: bold;
      }
    }
  }

  .el-tabs__item {
    &:hover {
      color: $yellow;
    }

    &.is-active {
      color: $yellow;
    }
  }

  .el-tabs__active-bar {
    display: none;
  }

  .el-tabs__nav-wrap::after {
    display: none;
  }
}
</style>
