<template>
  <div class="container">
    <article-list :data-list="dataList"/>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'
export default {
  name: 'Frontend',
  components: {
    ArticleList
  },
  data: () => ({
    dataList: []
  }),
  created () {
    this.$axios.getArticleList({subject: 'frontend'}).then(res => {
      console.log(res)
      if (!res.error) {
        this.dataList = res.data.list || []
      }
    })
  }
}
</script>
