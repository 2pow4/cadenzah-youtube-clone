const React = require('react')
const { connect } = require('react-redux')
const ResultList = require('../components/ResultList.jsx')
const { videoClick } = require('../../store/actions')

const ResultListContainer = (props) => {
  return (
    <ResultList
      items={props.items}
      onVideoClicked={(clickedVideoId, e) => props.videoClick(clickedVideoId)} />
  )
}

const mapStateToProps = ({ input }) => ({
  items: input.data.items
})

const mapDispatchToProps = (dispatch) => ({
  videoClick: (playingVideoId) => dispatch(videoClick(playingVideoId))
})

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultListContainer)
