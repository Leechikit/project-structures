const prodConfig = require('./build/prod')
const devConfig = require('./build/dev')

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig
