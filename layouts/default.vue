<template>
  <div class="app">
    <Header />
      <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
