const React = require('react')
const axios = require('axios')
let youtubeAPIURL = `https://www.googleapis.com/youtube/v3/search`
  + `?part=snippet`
  + `&maxResults=5`
  + `&order=relevance`
  + `&key=AIzaSyD3sCnZg05jineQg2Puzee12EYXX4E9XA4`

//   + `&q=zerg`

const Input = require('./Input.jsx')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: "",
      data: {}
    }
  }

  handleSearchInput(e) {
    this.setState({ keyword: e.target.value })
  }

  handleFetchData(e) {
    const newYoutubeAPIURL = youtubeAPIURL + `&q=${this.state.keyword}`
    axios.get(newYoutubeAPIURL)
      .then((response) => {
        this.setState({ data: response })
        return new Promise(resolve => {
          resolve(response)
        })
      }).then((data) => {
         console.log(this.state.data)
      })
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h2>Youtube Search & Player</h2>
        <Input
          onInputChange = {(e) => this.handleSearchInput(e)}
          onSearchExecuted = {(e) => this.handleFetchData(e)}
          searchKeyword = {this.state.keyword}/>
        <h5>Youtube API Key is provided by cadenzah. DON't ABUSE!</h5>
      </div>
    )
  }
}

module.exports = App
