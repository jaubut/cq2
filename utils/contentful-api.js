const contentful = require('contentful')

const config = {
  space: "n7526iq5odzp",
  accessToken: "73674a8db1f484c852da934a7154ddcc2b549484925f0fef26eea2f693fe8a0b"
}

module.exports = {
  createClient (){
    return contentful.createClient(config)
  }
}
