const Router = require('koa-router')
const {getArticleList, getArticle} = require('../../sql/actions/article')

let article = new Router()

article.get('/:id', async ( ctx ) => {
  let args = []
  ctx.body = {
    error: 0,
    data: await getArticle(...args)
  }
})

article.get('/', async ( ctx ) => {
  let args = []
  ctx.body = {
    error: 0,
    data: {
      list: await getArticleList(...args)
    }
  }
})

module.exports = article
