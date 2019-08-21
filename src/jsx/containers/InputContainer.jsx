const React = require('react')
const { connect } = require('react-redux')
const Input = require('../components/Input.jsx')
const { searchInput, searchExec } = require('../../store/actions')

const axios = require('axios')
let youtubeAPIURL = `https://www.googleapis.com/youtube/v3/search`
  + `?part=snippet`
  + `&maxResults=10`
  + `&order=relevance`
  + `&type=video`
  + `&key=AIzaSyD3sCnZg05jineQg2Puzee12EYXX4E9XA4`

// IN PRODUCTION, DO NOT PUT YOUR API KEY IN THE FRONT CODE!

class InputContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSearchInput(e) {
    this.props.inputChange(e.target.value)
  }

  handleClickEnter(e) {
    if (e.keyCode === 13) this.handleFetchData()
  }

  handleFetchData() {
    if (this.props.keyword === "") return alert('검색 키워드를 입력하세요')
    const newYoutubeAPIURL = youtubeAPIURL + `&q=${this.props.keyword}`
    axios.get(newYoutubeAPIURL)
      .then((response) => {
        this.props.searchExec(response.data)
      })
  }

  render() {
    return (
      <Input
        onInputChange={(e) => this.handleSearchInput(e)}
        onEnterPressed={(e) => { this.handleClickEnter(e) }}
        onSearchExecuted={(e) => this.handleFetchData(e)}
        searchKeyword={this.props.keyword} />
    )
  }
}

const mapStateToProps = ({ input }) => ({
  keyword: input.keyword
})

const mapDispatchToProps = dispatch => ({
  inputChange: keyword => dispatch(searchInput(keyword)),
  searchExec: data => dispatch(searchExec(data))
})

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputContainer)
