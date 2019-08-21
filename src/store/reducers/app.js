const { BACK_CLICK } = require('../actions')
// const initialState = require('./initialState.js')
const initialState = {
  fetchFinish: false,
  showPlayer: false
}

const app = (state = initialState, action) => {
  switch(action.type) {
    case BACK_CLICK:
      return {
        ...state,
        showPlayer: false
      }

    default:
      return state
  }
}

module.exports = app
