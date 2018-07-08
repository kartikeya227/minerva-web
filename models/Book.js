var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
  name: String,
  heading: String,
  content: String,
  published_date: String
});

module.exports = mongoose.model('Article', ArticleSchema);
