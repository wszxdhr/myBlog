const Article = require('../model/article')
const md5 = require('md5')

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
    where.article_id = id
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

const updateArticle = function (params) {
  const id = params && params.id || ''
  delete params.id
  try {
    if (id) {
      return Article.update({
        ...params
      }, {
        where: {
          article_id: id
        }
      })
    } else {
      const hash = md5(new Date().valueOf() + params.title)
      return Article.create({
        article_id: hash,
        ...params
      })
    }
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getArticle,
  getArticleList,
  updateArticle
}
