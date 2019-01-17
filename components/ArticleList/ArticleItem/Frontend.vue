<template>
  <li class="article-item frontend-article-item">
    <div class="article-item__content">
      <nuxt-link
        :to="{name: 'platform-article-id', params: {id: info.id, platform: 'frontend'}}"
        class="article-item__title">{{ info.title }}</nuxt-link>
      <!--<ul class="tags">
        <li class="tag">Vue.js</li>
        <li class="tag">Koa.js</li>
        <li class="tag">D3.js</li>
      </ul>-->
      <nuxt-link
        :to="{name: 'platform-article-id', params: {id: info.id, platform: 'frontend'}}"
        class="article-item__abstract">{{ info.abstract }}</nuxt-link>
      <div class="article-item__footer">
        <!--<i class="el-icon-view view-icon"/>-->
        <!--<span class="view-number">123123</span>-->

        <!--<span class="article-item__footer__dot">·</span>-->
        <span class="article-item__footer__updated-time">{{ getAbsoluteTime(info.createdAt) }}</span>
      </div>
    </div>
    <div
      :style="{backgroundImage: `url(${info.banner})`}"
      class="article-item__banner"/>
  </li>
</template>

<script>
  import { getAbsoluteTime } from '@/utils'
  export default {
    name: 'ArticleItemFrontend',
    props: {
      info: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
       getAbsoluteTime
    }
  }
</script>
