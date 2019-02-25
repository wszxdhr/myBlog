<script>
  import {markdown} from 'markdown'
  import Code from './code'
  export default {
    name: 'Markdown',
    components: {
      'codeBlock': Code
    },
    props: {
      markdown: {
        default: '',
        type: String
      }
    },
    methods: {
      elementHandler (el, h) {
        if (el instanceof Array) {
          let tag = el.shift()
          if (tag === 'pre' && el[0] && el[0][0] === 'code') {
            // 代码块
            return h('code-block', {
              props: {
                content: el[0][1]
              }
            })
            // return h('iframe', {
            //   domProps: {
            //     src: el[0][1].replace('jsfiddle:', ''),
            //     height: '300',
            //     width: '100%',
            //     allowFullScreen: 'allowfullscreen',
            //     frameBorder: '0'
            //   }
            // })
          } else if (tag === 'code') {
            console.log(el)
            return h('code-block', {
              props: {
                content: el[0]
              }
            })
          } else {
            // html
            let children = []
            for (let i = 0; i < el.length; i++) {
              children.push(this.elementHandler(el[i], h))
            }
            let _class = {}
            if (tag === 'html') {
              _class.markdown = true
            }
            return h(tag === 'html' ? 'div' : tag, {
              class: _class
            }, children)
          }
        } else if (typeof el === 'string') {
          // 纯文字
          return h('span', {
            domProps: {
              innerText: el
            }
          })
        }
      }
    },
    render (h) {
      console.log(markdown.toHTMLTree(this.markdown))
      return this.elementHandler(markdown.toHTMLTree(this.markdown), h)
    }
  }
</script>
