const crypto = require('crypto');
const config = require('./config');

exports.post = function gethash (req, res) {
  let d = new Date()
  let date = d.getTime();
  let apikey = config.marvelKey.apikey
  let hash = crypto.createHash('md5').update(`${date}${config.marvelKey.private}${apikey}`).digest('hex')
  res.send({ date, apikey, hash })
}
