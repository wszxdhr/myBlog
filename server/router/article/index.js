const Router = require('koa-router')
const {getArticleList} = require('../../sql/actions/article')

let article = new Router()

article.get('/', async ( ctx ) => {
  console.log(ctx.request.query)
  let args = []
  ctx.body = {
    error: 0,
    data: {
      list: await getArticleList(...args)
    }
  }
})

article.get('/:id', async ( ctx ) => {
  console.log(ctx.request)
  let args = []
  ctx.body = {
    error: 0,
    data: {
      list: await getArticleList(...args)
    }
  }
})

module.exports = article
