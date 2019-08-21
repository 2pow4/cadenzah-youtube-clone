const { combineReducers } = require('redux')
const app = require('./app.js')
const input = require('./input.js')
const result = require('./result.js')

module.exports = combineReducers({
  app,
  input,
  result
})
