<template>
  <v-app>
    <Header />
    <nuxt />
    <Footer />
  </v-app>
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

<style lang="scss">
@import '../assets/scss/global.scss';
</style>
