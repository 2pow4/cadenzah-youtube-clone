const React = require('react')

const Result = (props) => {
  return (
    <div key={props.element.toString()}>
      <img src={props.element.snippet.thumbnails.medium.url} />
      <p>동영상 제목: {props.element.snippet.title}</p>
    </div>
  )
}

module.exports = Result
