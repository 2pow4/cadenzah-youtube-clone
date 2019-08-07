const React = require('react')
const Youtube = require('react-youtube').default

const Player = (props) => {
  return (
    <div>
      <button
        onClick={props.onPrev}>뒤로 가기</button>
      <Youtube
        videoId={props.videoId}
        width={800}
        height={480} />
    </div>
  )
}

module.exports = Player
