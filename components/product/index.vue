<template>
  <div v-if="products.length > 0" class="product">
    <div class="container">
      <h2 class="title">
        Trái phiếu Safin phân phối
      </h2>
    </div>
    <div class="product__list">
      <ProductItem v-for="(product, id) in products" :key="id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductItem from './productItem'
export default {
  name: 'Product',
  components: {
    ProductItem
  },
  props: {
    products: {
      default: () => [],
      type: Array,
      require: true
    }
  }
}
</script>

<style lang="scss">
.product {
  margin-bottom: 150px;
}
</style>
