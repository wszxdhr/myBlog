<template>
  <div class="article-container">
    <div
      class="article-markdown"
      v-html="content"/>
  </div>
</template>

<script>
import {markdown} from 'markdown'
export default {
  name: 'ArticleContainer',
  data: () => ({
    articleData: {},
    content: '',
    contentTree: {}
  }),
  created () {
    this.$axios.getArticle({id: this.$route.params.id}).then(res => {
      let resData = res.data
      if (res.error || !resData) {} else {
        this.articleData = resData
        this.content = markdown.toHTML(resData.content)
        this.contentTree = markdown.parse(resData.content)
      }
    })
  }
}
</script>
