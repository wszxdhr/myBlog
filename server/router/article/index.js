const Router = require('koa-router')
const {getArticleList, getArticle, updateArticle} = require('../../sql/actions/article')
const path = require('path')
const fs = require('fs')

let article = new Router()

article.get('/:id', async ( ctx ) => {
  const body = ctx.request || {}
  ctx.body = {
    error: 0,
    data: await getArticle(ctx.params || {})
  }
})

article.get('/', async ( ctx ) => {
  ctx.body = {
    error: 0,
    data: {
      list: await getArticleList((ctx.params || {}).subject)
    }
  }
})

article.post('/update', async ( ctx ) => {
  const body = ctx.request.body || {}
  function failed () {
    ctx.body = {
      error: 510,
      data: {},
      message: '更新失败'
    }
  }
  await new Promise(async resolve => {
    fs.readFile(path.join(__dirname, '../../../pm2.json'), async (err, data) => {
      if (err) {
        console.error(err)
        failed()
      } else {
        const config = JSON.parse(data.toString())
        const {pass, canEdit} = config
        if (canEdit && pass === body.password) {
          const params = {
            ...body,
            tags: JSON.stringify(body.tags)
          }
          delete params.password
          await updateArticle(params).then(res => {
            ctx.body = {
              error: 0,
              data: {}
            }
          }).catch(err => {
            console.error(err)
            failed()
          })
        } else {
          console.error('canEdit = false')
          failed()
        }
      }
      resolve()
    })
  })
})

module.exports = article
