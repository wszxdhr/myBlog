const sql = require('../index')
const Sequelize = require('sequelize')

const Article = sql.define('articles', {
  title: Sequelize.TEXT,
  tags: Sequelize.STRING,
  description: Sequelize.TEXT,
  page_view: Sequelize.INTEGER,
  content: Sequelize.TEXT,
  subject: Sequelize.STRING,
  banner: Sequelize.TEXT,
  abstract: Sequelize.TEXT,
  article_id: Sequelize.TEXT
})

module.exports = Article
