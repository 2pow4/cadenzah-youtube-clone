const React = require('react')
const Result = require('./Result.jsx')

const ResultList = (props) => {
  let resultList

  // if search result is empty, render nothing
  if (props.items.length === 0) return (
    <div>
      검색 결과가 없습니다.
    </div>
  )

  resultList = props.items.map((element, index) => (
    <Result
      element={element}
      onVideoClicked={props.onVideoClicked}
      key={index} />
  ))

  return (
    <div className="row">
      {resultList}
    </div>
  )
}

module.exports = ResultList
