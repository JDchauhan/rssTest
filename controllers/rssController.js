const rssService = require('../services/rssService')
const responses = require('../helpers/responses')

module.exports.searchRss = async (req, res) => {
  try {
    const topic = req.params.topic
    let data = await rssService.getRssFromDB(topic)
    if (!data) {
      data = await rssService.getRssFromSource(topic)
    }
    return responses.successMsg(res, data)
  } catch (err) {
    // you can log error here as well
    return responses.errorMsg(res, 500, 'Unexpected Error', 'unexpected error.', null)
  }
}
