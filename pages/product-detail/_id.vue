<template>
  <div class="product-detail">
    <BannerProductDetail v-if="productDetailData.Product" :banners="productDetailData.Product" />
    <ProductItem v-if="productDetailData.Product" :product="productDetailData.Product" />
    <Organization v-if="productDetailData.PrAgentReleases" :agent="productDetailData.PrAgentReleases" />
    <InvestmentReturns />
    <Benefit :title="'Novaland'" />
    <TypicalPartner v-if="productDetailData.MdPartners" :partners="productDetailData.MdPartners" />
  </div>
</template>

<script>
import BannerProductDetail from '@/components/banner/productDetail'
import TypicalPartner from '@/components/typicalPartner'
import ProductItem from '@/components/product/productItem'
import Benefit from '@/components/benefit'
import InvestmentReturns from '@/components/investmentReturns'
import Organization from '@/components/organization'
import productDetaiServices from '@/services/modules/productDetailServices'
export default {
  name: 'ProductDetai',
  components: {
    BannerProductDetail,
    TypicalPartner,
    ProductItem,
    Benefit,
    InvestmentReturns,
    Organization
  },
  data () {
    return {
      productDetailData: {
        Product: {}
      }
    }
  },
  created () {
    this.getProductById()
  },
  methods: {
    async getProductById () {
      try {
        const product = await productDetaiServices.getById(this.$route.params.id)
        if (product) {
          this.productDetailData = product.data.Data
        }
      } catch (error) {

      }
    }
  }
}
</script>
<style lang="scss">
.product-detail {
  background-color: $gray-light;
}
</style>
