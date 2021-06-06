'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RssSearchHistory = new Schema({
  topic: {
    type: String
  },
  data: {
    type: Object
  }
})

module.exports = mongoose.model('rss_search_history', RssSearchHistory, 'rss_search_history')
