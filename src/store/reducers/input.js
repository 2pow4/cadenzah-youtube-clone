const { SEARCH_INPUT, SEARCH_EXEC } = require('../actions')
// const initialState = require('./initialState.js')
const initialState = {
  keyword: '',
  data: []
}

const input = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_INPUT:
      console.log(state)
      console.log(action)
      return {
        ...state,
        keyword: action.keyword
      }

    case SEARCH_EXEC:
      console.log(state)
      console.log(action)
      return {
        ...state,
        data: action.data,
        fetchFinish: true
      }
      
    default:
      return state
  }
}

module.exports = input
