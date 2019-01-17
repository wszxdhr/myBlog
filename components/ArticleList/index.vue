<template>
  <ul class="article-list">
    <frontend-article-item
      v-for="item in dataList"
      :info="item"
      :key="item.id"/>
  </ul>
</template>

<script>
import Frontend from './ArticleItem/Frontend'
export default {
  name: 'ArticleList',
  components: {
    FrontendArticleItem: Frontend
  },
  props: {
    dataList: {
      type: Array,
      default: () => ([])
    }
  },
  created () {
    console.log(this.$moment)
  }
}
</script>
