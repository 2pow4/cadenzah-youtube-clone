const React = require('react')

const Result = (props) => {
  return (
    <div
      onClick={props.onVideoClicked.bind(null, props.element.id.videoId)}>
      <img src={props.element.snippet.thumbnails.medium.url} />
      <p>동영상 제목: {props.element.snippet.title}</p>
    </div>
  )
}

module.exports = Result
