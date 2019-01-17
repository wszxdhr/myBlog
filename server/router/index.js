const Router = require('koa-router')
let article = require('./article/index')

let router = new Router()
router.use('/api/article', article.routes(), article.allowedMethods())

module.exports = router
