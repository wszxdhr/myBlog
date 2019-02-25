<template>
  <div class="code-block">
    <pre>
      <code>{{ handledContent }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'CodeBlock',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {
    isInlineCode () {
      return this.content.indexOf('\n') !== -1
    },
    contentRows () {
      return this.content.split('\n')
    },
    language () {
      if (this.isInlineCode) {
        return ''
      } else {
        return this.contentRows[0]
      }
    },
    handledContent () {
      let contentRows = this.content.split('\n')
      console.log(contentRows, this.isInlineCode)
      if (this.isInlineCode) {
        contentRows = contentRows.slice(1, contentRows.length)
      }
      let result = []
      for (let row of contentRows) {
        if (!this.hasJsfiddleSrc(row)) {
          result.push(row)
        }
      }
      return result.join('\n')
    },
    jsfiddleSrc () {
      if (this.isInlineCode) {
        return ''
      } else {
        return this.hasJsfiddleSrc(this.contentRows[1]) ? this.contentRows[1] : ''
      }
    }
  },
  methods: {
    hasJsfiddleSrc (row) {
      return row.slice(0, 11) === 'jsfiddle://'
    }
  }
}
</script>
