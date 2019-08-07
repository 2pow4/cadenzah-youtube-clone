const React = require('react')

const Player = (props) => {
  return (
    <div>
      <button
        onClick={props.onPrev}>뒤로 가기</button>
      와! 재생기!
    </div>
  )
}

module.exports = Player
