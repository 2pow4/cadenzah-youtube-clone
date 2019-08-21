const SEARCH_INPUT = 'Input/SEARCH_INPUT'
const SEARCH_EXEC = 'Input/SEARCH_EXEC'
const VIDEO_CLICK = 'Result/VIDEO_CLICK'
const BACK_CLICK = 'Player/BACK_CLICK'

const searchInput = keyword => ({ type: SEARCH_INPUT, keyword })
const searchExec = (data) => ({ type: SEARCH_EXEC, data })
const videoClick = (playingVideoId) => ({ type: VIDEO_CLICK, playingVideoId })
const backClick = () => ({ type: BACK_CLICK })

export { SEARCH_INPUT, SEARCH_EXEC, VIDEO_CLICK, BACK_CLICK, searchInput, searchExec, videoClick, backClick }
