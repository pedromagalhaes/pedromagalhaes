const Twitter = require('twitter')

const { TWITTER_API_KEYS } = require('../../src/config')

const twitterClient = new Twitter({
  consumer_key: TWITTER_API_KEYS.consumer_key,
  consumer_secret: TWITTER_API_KEYS.consumer_secret,
  access_token_key: TWITTER_API_KEYS.access_token_key,
  access_token_secret: TWITTER_API_KEYS.access_token_secret
})

const twitterOptions = {
  count: 4,
  exclude_replies: true,
  include_rts: true
}

module.exports = async (req, res) => {
  await twitterClient.get('statuses/user_timeline', twitterOptions, (error, tweets, response) => {
    if (error) {
      res.statusCode = response.statusCode //eslint-disable-line
      res.send(error)
    }
    res.send(tweets)
  })
}
