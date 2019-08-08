const React = require('react')
const axios = require('axios')
let youtubeAPIURL = `https://www.googleapis.com/youtube/v3/search`
  + `?part=snippet`
  + `&maxResults=10`
  + `&order=relevance`
  + `&type=video`
  + `&key=AIzaSyD3sCnZg05jineQg2Puzee12EYXX4E9XA4`

// IN PRODUCTION, DO NOT PUT YOUR API KEY IN THE FRONT CODE!

const Input = require('./Input.jsx')
const ResultContainer = require('./ResultContainer.jsx')
const Player = require('./Player.jsx')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: "",
      data: {},
      fetchFinish: false,
      showPlayer: false,
      playingVideoId: ""
    }
  }

  handleSearchInput(e) {
    this.setState({ keyword: e.target.value })
  }

  handleClickEnter(e) {
    if (e.keyCode === 13) this.handleFetchData(e)
  }

  handleFetchData(e) {
    if (this.state.keyword === "") return alert('검색 키워드를 입력하세요')
    const newYoutubeAPIURL = youtubeAPIURL + `&q=${this.state.keyword}`
    axios.get(newYoutubeAPIURL)
      .then((response) => {
        this.setState({
          data: response.data,
          fetchFinish: true
        })
        return new Promise(resolve => {
          resolve(response)
        })
      }).then((data) => {
         console.log(this.state.data)
      })
  }

  handlePlayer(clickedVideoId, e) {
    // 눌렀을 때에 동영상 ID를 state에 갱신하고,
    this.setState({
      playingVideoId: clickedVideoId,
      showPlayer: true
   })

    // 리스트 뷰를 없애고 플레이어 뷰로 전환
    // fetchFinish를 false로 전환하고, showPlayer를 true로 만든다
  }

  handleBackButton(e) {
    this.setState({
      showPlayer: false
    })
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
            { this.state.showPlayer ? (
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
        <Input
          onInputChange={(e) => this.handleSearchInput(e)}
          onSearchExecuted={(e) => this.handleFetchData(e)}
          onEnterPressed={(e) => { this.handleClickEnter(e) }}
          searchKeyword={this.state.keyword} />

        {/* Contents - Results and Player */}
        {this.state.fetchFinish ?
          this.state.showPlayer ? (
            <Player
              videoId={this.state.playingVideoId} />
          ) : (
          <ResultContainer
            items={this.state.data.items}
            onVideoClicked={this.handlePlayer.bind(this)} />
          ) : (
          <div></div>
        )}

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
