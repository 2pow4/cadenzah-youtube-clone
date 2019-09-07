const React = require('react')
const { Route, Switch } = require('react-router-dom')

const InputContainer = require('../containers/InputContainer.jsx')
const ResultListContainer = require('../containers/ResultListContainer.jsx')
const Player = require('./Player.jsx')

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  handleBackButton(e) {
    this.props.backClick()
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        {/* Navigation Bar - titles and search bar */}
        <nav>
          <div className="nav-wrapper teal lighten-1">
            <a
              href="#"
              className="brand-logo center"
              onClick={() => { window.location.reload() }} >
              Youtube Search & Player
            </a>
            <ul id="nav-mobile" className="left">
            { this.props.showPlayer ? (
                <li>
                  <a
                    href="#"
                    className="btn pulse z-depth-0"
                    onClick={(e) => this.handleBackButton(e)} >
                      <i className="large material-icons">arrow_back</i>
                  </a>
                </li>
            ) : <div></div>}
            </ul>
          </div>
        </nav>
        <InputContainer />
        {/* Contents - Results and Player */}
        <Switch>
          <Route exact path="/search/:keyword" component={ResultListContainer} />
          <Route exact path="/search" render={() => { return (<div></div>) }}/> // 초기 화면; 검색 화면 처리
        </Switch>
        <Route exact path="/video/:videoId" component={Player} />
        {/* Footer */}
        <footer className="page-footer white">
          <div className="footer-copyright teal lighten-1 center">
            <div className="container">
              Youtube API Key는 서비스 제작자가 제공합니다. 너무 많이 사용하면 서비스가 멈춰요!
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

module.exports = App

// {this.props.fetchFinish ?
//   this.props.showPlayer ? (
//     <Player
//       videoId={this.props.playingVideoId} />
//   ) : (
//   <ResultListContainer />
//   ) : (
//   <div></div>
// )}
