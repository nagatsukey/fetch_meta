const axios = require('axios')
const cheerio = require('cheerio')

const getMetaFromURL = async (url) => {
  const res = await axios.get(url)
  const $ = cheerio.load(res.data)
  return $('meta')
}

getMetaFromURL('https://github.com/MaxMEllon')
  .then(res => {
    res.each(function (idx, $elem) {
      console.log($elem.attribs)
    })
  })
  .catch(err => {
    console.error(err)
  })
