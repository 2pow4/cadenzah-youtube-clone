const React = require('react')
const axios = require('axios')
let youtubeAPIURL = `https://www.googleapis.com/youtube/v3/search`
  + `?part=snippet`
  + `&maxResults=5`
  + `&order=relevance`
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

  handleFetchData(e) {
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
      <div>
        <h2>Youtube Search & Player</h2>
        <Input
          onInputChange={(e) => this.handleSearchInput(e)}
          onSearchExecuted={(e) => this.handleFetchData(e)}
          searchKeyword={this.state.keyword} />
        {this.state.fetchFinish ?
          this.state.showPlayer ? (
            <Player
              onPrev={(e) => this.handleBackButton(e)}
              videoId={this.state.playingVideoId} />
          ) : (
          <ResultContainer
            items={this.state.data.items}
            onVideoClicked={this.handlePlayer.bind(this)} />
          ) : (
          <p>Not Ready Yet</p>
        )}
        <h5>Youtube API Key is provided by cadenzah. DON't ABUSE!</h5>
      </div>
    )
  }
}

module.exports = App
