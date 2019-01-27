<template>
  <div class="container article-container">
    <markdown :markdown="content"/>
  </div>
</template>

<script>
import Markdown from '~/components/Markdown/index.vue'
export default {
  name: 'ArticleContainer',
  components: {
    Markdown
  },
  data: () => ({
    articleData: {},
    content: ''
  }),
  created () {
    this.$axios.getArticle({id: this.$route.params.id}).then(res => {
      let resData = res.data
      if (res.error || !resData) {} else {
        this.articleData = resData
        this.content = resData.content
      }
    })
  }
}
</script>
