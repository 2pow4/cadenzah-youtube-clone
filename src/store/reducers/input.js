const { SEARCH_INPUT, SEARCH_EXEC } = require('../actions')
// const initialState = require('./initialState.js')
const initialState = {
  keyword: '',
  data: []
}

const input = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_INPUT:
      return {
        ...state,
        keyword: action.keyword
      }

    case SEARCH_EXEC:
      return {
        ...state,
        data: action.data
      }

    default:
      return state
  }
}

module.exports = input
