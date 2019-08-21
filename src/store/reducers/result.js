const { VIDEO_CLICK } = require('../actions')
// const initialState = require('./initialState.js')
const initialState = {
  playingVideoId: ''
}

const result = (state = initialState, action) => {
  switch(action.type) {
    case VIDEO_CLICK:
      return {
        ...state,
        showPlayer: true,
        playingVideoId: action.playingVideoId
      }
    default:
      return state
  }
}

module.exports = result
