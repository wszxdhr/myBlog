const Article = require('../model/article')

const getArticleList = function (subject) {
  let where = {}
  if (subject) {
    where.subject = subject
  }
  return Article.findAll({
    where
  }).then((res) => {
    // console.log(res, err)
    return res.map(val => {
      if (val.dataValues) {
        val.dataValues.tags = JSON.parse(val.dataValues.tags)
        val.dataValues.id = val.dataValues.article_id
        delete val.dataValues.article_id
        return val.dataValues
      } else {
        return {}
      }
    })
  })
}

const getArticle = function (params) {
  let where = {}
  const id = params && params.id
  if (id) {
    where.subject_id = id
  }
  return Article.findOne({
    where
  }).then((res) => {
    if (res.dataValues) {
      res.dataValues.tags = JSON.parse(res.dataValues.tags)
      res.dataValues.id = res.dataValues.article_id
      delete res.dataValues.article_id
      return res.dataValues
    } else {
      return {}
    }
  })
}

module.exports = {
  getArticle,
  getArticleList
}
