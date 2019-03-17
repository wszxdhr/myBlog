<template>
  <section class="container wide">
    <el-form
      ref="form"
      :model="form"
      label-width="80px">
      <el-form-item label="文章ID">
        <el-input
          v-model="articleId"
          placeholder="未输入文章ID，则为添加" >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="getArticle" />
        </el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="form.password"
          type="password" />
      </el-form-item>
      <el-form-item label="标题">
        <el-input
          v-model="form.title" />
      </el-form-item>
      <el-form-item label="标签">
        <el-input
          v-model="form.tags" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          v-model="form.description" />
      </el-form-item>
      <el-form-item label="分类">
        <el-input
          v-model="form.subject" />
      </el-form-item>
      <el-form-item label="头图">
        <el-input
          v-model="form.banner" />
      </el-form-item>
      <el-form-item label="正文">
        <el-input
          v-model="form.content"
          :autosize="{ minRows: 4, maxRows: 20}"
          type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'Editor',
  data () {
    return {
      articleId: '',
      form: {
        password: '',
        title: '',
        tags: '',
        content: '',
        description: '',
        subject: '',
        banner: ''
      }
    }
  },
  methods: {
    getArticle () {
      if (this.articleId) {
        this.$axios.getArticle({
          id: this.articleId
        }).then(res => {
          if (res && res.data) {
            const {data} = res
            this.form.title = data.title
            this.form.tags = data.tags.join(',')
            this.form.content = data.content
            this.form.description = data.description
            this.form.subject = data.subject
            this.form.banner = data.banner
          }
        })
      }
    },
    submit () {
      this.$axios.updateArticle({
        ...this.form,
        tags: (this.form.tags || '').split(','),
        id: this.articleId
      }).then(res => {
      })
    }
  }
}
</script>
