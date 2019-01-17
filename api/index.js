import interceptor from './interceptor'
import articles from './actions/articles'

export default function (axios) {
  interceptor(axios)
  articles(axios)
}
