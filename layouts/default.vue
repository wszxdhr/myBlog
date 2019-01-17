<template>
  <div class="layout-container">
    <layout-header/>
    <nuxt/>
  </div>
</template>

<script>
import layoutHeader from '@/components/Header/index.vue'
export default {
  name: 'DefaultLayout',
  components: {
    layoutHeader
  }
}
</script>

<style lang="scss">
@import "@/static/style/index.scss";
@import "@/static/style/base.scss";
.layout-container {
  padding: $header-height + $common-gap $common-gap $common-gap;
  background-color: #f9f9f9;
  min-height: 100vh;
}
</style>
