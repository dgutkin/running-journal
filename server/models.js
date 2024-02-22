const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String
});

const journalSchema = new Schema({
  journalName: String,
  userEmail: String
});

const articleSchema = new Schema({
  articleName: String,
  thoughts: {
    type: Map,
    of: String
  },
  journalName: String,
  userEmail: String
});

const User = mongoose.model('User', userSchema);
const Journal = mongoose.model('Journal', journalSchema);
const Article = mongoose.model('Article', articleSchema);

module.exports = { User, Journal, Article };
