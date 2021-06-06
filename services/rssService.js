const Parser = require('rss-parser')

const RssSearchHistory = require('../models/rssSearchHistory')
const parser = new Parser()

const saveRssSearch = async (topic, data) => {
  return RssSearchHistory.create({
    data,
    topic
  })
}

module.exports.getRssFromSource = async (topic) => {
  const feedLimit = 5
  const url = `http://www.reddit.com/search.rss?q=${topic}&limit=${feedLimit}`
  const parsedResponse = await parser.parseURL(url)

  saveRssSearch(topic, parsedResponse)

  return parsedResponse
}

module.exports.getRssFromDB = async (topic) => {
  return RssSearchHistory.findOne({
    topic
  })
}
