<script>
  import {markdown} from 'markdown'
  export default {
    name: 'Markdown',
    props: {
      markdown: {
        default: '',
        type: String
      }
    },
    methods: {},
    render (h) {
      console.log('markdown: ')
      console.log(markdown.parse(this.markdown))
      return h('div', {
        'class': ['markdown']
      })
    }
  }
</script>
