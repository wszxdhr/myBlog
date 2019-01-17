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
        return val.dataValues
      } else {
        return {}
      }
    })
  })
}

module.exports = {
  getArticleList
}
