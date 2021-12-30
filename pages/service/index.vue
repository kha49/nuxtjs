<template>
  <div class="service">
    <service />
    <achievement />
  </div>
</template>

<script>
import Service from '@/components/service'
import Achievement from '@/components/achievement'
export default {
  components: {
    Service,
    Achievement
  },
  mounted () {
    console.log('this.$router :>> ', this.$router)
  }
}
</script>
<style lang="scss">
.service {
  background-color: $gray-light;
}
</style>
