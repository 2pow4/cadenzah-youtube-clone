const React = require('react')
const ReactDOM = require('react-dom')
const { BrowserRouter } = require('react-router-dom')

const { Provider } = require('react-redux')
const { createStore } = require('redux')
const rootReducer = require('../store/reducers')

const AppContainer = require('./containers/AppContainer.jsx')
const store = createStore(rootReducer)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)
