const React = require('react')

const Input = (props) => {
  return (
    <div className="row valign-wrapper">
      <div className="col s11 input-field">
        <input
          type="text"
          onChange={props.onInputChange}
          onKeyDown={props.onEnterPressed}
          value={props.searchKeyword || ''}
          autoFocus="" />
        <label htmlFor="searchkeyword">검색 키워드를 입력하세요</label>
        <span className="helper-text">단일 동영상 검색만 가능합니다</span>
      </div>
      <button
        className="col s1 btn-large "
        onClick={props.onSearchExecuted}>
        <i className="material-icons">youtube_searched_for</i>
      </button>
    </div>
  )
}

module.exports = Input
