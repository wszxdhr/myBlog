<template>
  <div class="container article-container">
    <h1>{{ title }}</h1>
    <div class="article__updated-at">
      最后编辑于：{{ $moment(updatedAt).format('YYYY-MM-DD HH:mm:ss') }}
    </div>
    <ul class="tags article__tags">
      <li
        v-for="tag in tags"
        :key="tag"
        class="tag article__tag-item">
        {{ tag }}
      </li>
    </ul>
    <div class="article__banner-wrap">
      <img
        :alt="title + '的Banner'"
        :src="banner"
        class="article__banner-image">
    </div>
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
    content: '',
    tags: [],
    title: '',
    updatedAt: '',
    banner: ''
  }),
  created () {
    this.$axios.getArticle({id: this.$route.params.id}).then(res => {
      let resData = res.data
      if (res.error || !resData) {} else {
        this.articleData = resData || {}
        this.content = resData.content || ''
        this.tags = resData.tags || []
        this.title = resData.title || ''
        this.updatedAt = resData.updatedAt || ''
        this.banner = resData.banner || ''
      }
    })
  }
}
</script>
