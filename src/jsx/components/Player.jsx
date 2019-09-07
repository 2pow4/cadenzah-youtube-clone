const React = require('react')
const { withRouter } = require('react-router-dom')

const Player = (props) => {
  return (
    <div className="video-container">
      <iframe src={`https://www.youtube.com/embed/${props.match.params.videoId}`}
        frameBorder='0'
        allow='encrypted-media'
        allowFullScreen />
    </div>
  )
}

module.exports = Player
