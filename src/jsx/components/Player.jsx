const React = require('react')

const Player = (props) => {
  return (
    <div class="video-container">
      <iframe src={`https://www.youtube.com/embed/${props.videoId}`}
        frameBorder='0'
        allow='encrypted-media'
        allowFullScreen />
    </div>
  )
}

module.exports = Player
