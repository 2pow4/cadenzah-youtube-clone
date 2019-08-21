const React = require('react')
const { connect } = require('react-redux')
const App = require('../components/App.jsx')
const { backClick } = require('../../store/actions')

const AppContainer = (props) => {
  return (
    <App
      showPlayer={props.showPlayer}
      fetchFinish={props.fetchFinish}
      backClick={props.backClick}
      playingVideoId={props.playingVideoId} />
  )
}

const mapStateToProps = ({ app, result }) => ({
  fetchFinish: app.fetchFinish,
  showPlayer: app.showPlayer,
  playingVideoId: result.playingVideoId
})

const mapDispatchToProps = (dispatch) => ({
  backClick: () => dispatch(backClick())
})

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
