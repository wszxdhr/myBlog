<template>
  <div :class="['code-block', {'has-jsfiddle': jsfiddleSrc, 'inline-code': isInlineCode}]">
    <code>
      <span
        v-for="(row, $index) in handledContent.split('\n')"
        :key="$index"
        class="code-block__code-row">{{ row }}</span>
    </code>
    <div class="code-block__buttons">
      <el-button
        size="mini"
        class="code-block__button-left">在Jsfiddle上编辑</el-button>
      <el-button
        size="mini"
        class="code-block__button-right"
        @click="addToClipboard">复制代码</el-button>
    </div>
  </div>
</template>

<script>
import copy from 'clipboard-copy'
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
      return this.content.indexOf('\n') === -1
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
      if (!this.isInlineCode) {
        contentRows = contentRows.slice(1, contentRows.length)
      }
      if (this.jsfiddleSrc) {
        contentRows = contentRows.slice(1, contentRows.length)
      }
      let result = []
      for (let row of contentRows) {
        result.push(row)
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
      return (row || '').slice(0, 11) === 'jsfiddle://'
    },
    showRow (index) {
      if (this.jsfiddleSrc) {
        return index >= 2
      } else if (!this.isInlineCode) {
        return index >= 1
      }
      return true
    },
    addToClipboard () {
      copy(this.handledContent)
    }
  }
}
</script>

<style lang="scss">
  .code-block {
    /*background-color: #f9f2f4;*/
    /*color: #c7254e;*/
    // not inline
    &:not(.inline-code) {
      padding: 15px 20px;
      border-radius: 4px;
      background-color: #f5f5f5;
      position: relative;
      .code-block__code-row {
        display: block;
      }
      .code-block__buttons {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        transition: .3s;
        pointer-events: none;
        opacity: 0;
        .el-button {
          margin: 0;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          &:first-child {
            margin-right: -2px;
            border-bottom-right-radius: 0;
          }
          &:last-child {
            border-bottom-left-radius: 0;
          }
        }
      }
      &:hover {
        .code-block__buttons {
          opacity: 1;
          pointer-events: auto;
        }
      }
    }
    // inline-code
    &.inline-code {
      background-color: #f9f2f4;
      color: #c7254e;
      border-radius: 2px;
      padding: 2px 4px;
      margin: 0 2px;
      display: inline-block;
      .code-block__buttons {
        display: none;
      }
    }
  }
</style>
