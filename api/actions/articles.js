export default function (axios) {
  axios.getArticleList = (params) => {
    return axios.get(`/article?subject=${params.subject || 'frontend'}`)
  }
  axios.getArticle = (params) => {
    return axios.get(`/article/${params.id}`)
  }
}
