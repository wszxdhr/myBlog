<template>
  <div class="article-container">
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'ArticleContainer',
  created () {
    this.$axios.getArticle({id: this.$route.params.id}).then(res => {
      console.log(res)
    })
  }
}
</script>
