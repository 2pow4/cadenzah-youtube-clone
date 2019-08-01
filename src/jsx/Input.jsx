const React = require('react')

const Input = (props) => {
  return (
    <div className="search-bar">
      <input
        className="search-bar-input"
        type="text"
        placeholder="검색 키워드를 입력하세요"
        onChange={props.onInputChange}
        value={props.searchKeyword}/>
      <button
        className="search-bar-button"
        onClick={props.onSearchExecuted}>검색</button>
    </div>
  )
}

module.exports = Input
