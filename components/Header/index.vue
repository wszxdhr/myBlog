<template>
  <div class="layout__header">
    <ul class="layout__header__list">
      <nuxt-link
        :class="['layout__header__item', {active: isActive('frontend')}]"
        to="/frontend"
        tag="li">前端</nuxt-link>
        <!--<nuxt-link-->
        <!--:class="['layout__header__item', {active: isActive('life')}]"-->
        <!--to="/life"-->
        <!--tag="li">日常</nuxt-link>-->
        <!--<nuxt-link-->
        <!--:class="['layout__header__item', {active: isActive('guitar')}]"-->
        <!--to="/guitar"-->
        <!--tag="li">吉他</nuxt-link>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  created () {
  },
  methods: {
    isActive (platform) {
      return this.$route.name === platform || this.$route.params.platform === platform
    }
  }
}
</script>

<style lang="scss">
  @import "@/static/style/base.scss";
.layout__header {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
  line-height: $header-height;
  border-bottom: 1px solid #f5f5f5;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  -webkit-backdrop-filter: blur(20px);
  .layout__header__list {
    display: flex;
    justify-content: center;
    .layout__header__item {
      padding: 0 20px;
      cursor: pointer;
      position: relative;
      transition: color .3s;
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        height: $header-router-item-active-border-height;
        width: 100%;
        left: 0;
        background-color: $main-color;
        display: block;
        opacity: 0;
        transition: all .3s;
        transform: scaleX(.7);
      }
      &:hover {
        background-color: rgba(240, 240, 240, 0.9);
      }
      &.active {
        color: lighten($main-color, 10%);
        &:after {
          opacity: 1;
          transform: scaleX(1);
        }
      }
      &:active {
        color: lighten($main-color, 20%);
        &:after {
          opacity: .5;
          transform: scaleX(.9);
        }
      }
    }
  }
}
</style>
