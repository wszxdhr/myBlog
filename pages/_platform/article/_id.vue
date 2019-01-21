<template>
  <div class="article-container">
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'ArticleContainer',
  data: () => ({
    markdown: ''
  }),
  created () {
    this.$axios.getArticle({id: this.$route.params.id}).then(res => {
      let resData = res.data
      if (res.error || !resData) {} else {
        
      }
      console.log(resData)
    })
  }
}
</script>
