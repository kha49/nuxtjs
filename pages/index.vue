<template>
  <div class="homepage">
    <Banner :banners="homepageData.Banners" :issuing-organizations="homepageData.IssuingOrganizations" />
    <div style="width: 100%; height: 30px">
      <nuxt-link :to="`product-detail/0514eec7-aea2-4fd6-ae8d-c5260030d55c`"> clcik </nuxt-link>
    </div>
    <Feature />
    <product-list :products="homepageData.Products" />
    <TalkAboutUs :partner-reviews="homepageData.PartnerReviews" />
    <achievement />
    <TypicalPartner :partners="homepageData.Partners" />
  </div>
</template>

<script>
// component
import Feature from '@/components/feature'
import ProductList from '@/components/product'
import Banner from '@/components/banner/homepage'
import Achievement from '@/components/achievement'
import TypicalPartner from '@/components/typicalPartner'
import TalkAboutUs from '@/components/talkAboutUs'

// services
import HomeServices from '@/services/modules/homeServices'
export default {
  name: 'Homepage',
  components: {
    Feature,
    ProductList,
    Banner,
    Achievement,
    TypicalPartner,
    TalkAboutUs
  },
  data () {
    return {
      homepageData: {}
    }
  },
  async fetch () {
    await this.getDataHomepage()
  },
  methods: {
    async getDataHomepage () {
      try {
        const homepage = await HomeServices.getAll()
        if (homepage) {
          this.homepageData = homepage.data.Data
        }
      } catch (error) {

      }
    }
  }
}
</script>
<style lang="scss">
.homepage {
  background-color: $gray-light;
}
</style>
