const React = require('react')

const Input = (props) => {
  return (
    <div className="row">
      <div className="col s11 input-field">
        <input
          type="text"
          onChange={props.onInputChange}
          value={props.searchKeyword}
          autofocus="" />
        <label htmlfor="searchkeyword">검색 키워드를 입력하세요</label>
        <span class="helper-text">단일 동영상 검색만 가능합니다</span>
      </div>
      <button
        className="col s1 btn-large"
        onClick={props.onSearchExecuted}>검색</button>
    </div>
  )
}

module.exports = Input
