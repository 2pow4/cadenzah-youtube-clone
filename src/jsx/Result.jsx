const React = require('react')

const Result = (props) => {
  return (
    <div className="col s12 m6 l4">
      <div
        className="card"
        onClick={props.onVideoClicked.bind(null, props.element.id.videoId)} >
        <div className="card-image">
          <img src={props.element.snippet.thumbnails.medium.url} />
        </div>
        <div className="card-content">
          <span className="truncate">{props.element.snippet.title}</span>
        </div>
      </div>
    </div>
  )
}

module.exports = Result
