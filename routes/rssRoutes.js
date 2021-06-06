'use strict'
module.exports = function (app) {
  const rssController = require('../controllers/rssController')
  const responses = require('../helpers/responses')

  // Routes
  app.get('/', function (req, res) {
    const results = {
      message: 'you have successfully reached the api'
    }
    return responses.successMsg(res, results)
  })

  // vendor routes
  app.get('/rss/:topic', rssController.searchRss)

  // star routes
  app.get('*', function (req, res) {
    return responses.errorMsg(res, 404, 'Not Found', 'path not found.', null)
  })

  app.put('*', function (req, res) {
    return responses.errorMsg(res, 404, 'Not Found', 'path not found.', null)
  })

  app.delete('*', function (req, res) {
    return responses.errorMsg(res, 404, 'Not Found', 'path not found.', null)
  })

  app.post('*', function (req, res) {
    return responses.errorMsg(res, 404, 'Not Found', 'path not found.', null)
  })
}
