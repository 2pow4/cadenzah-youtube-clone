const { VIDEO_CLICK, BACK_CLICK, SEARCH_EXEC } = require('../actions')
// const initialState = require('./initialState.js')
const initialState = {
  fetchFinish: false,
  showPlayer: false
}

const app = (state = initialState, action) => {
  switch(action.type) {
    case VIDEO_CLICK:
      return {
        ...state,
        showPlayer: true
      }

    case BACK_CLICK:
      return {
        ...state,
        showPlayer: false
      }

    case SEARCH_EXEC:
      return {
        ...state,
        fetchFinish: true
      }

    default:
      return state
  }
}

module.exports = app
