<template>
  <div class="scg-container tw-mx-auto tw-px-4 lg:tw-px-0">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped>
.scg-container {
  width: 100%;

  @include min-sm {
    width: 720px;
  }

  @include min-lg {
    width: 960px;
  }

  @include min-xl {
    width: 1110px;
  }

  @include min-xxl {
    width: 1280px;
  }
}
</style>
