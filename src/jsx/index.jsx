const React = require('react')
const ReactDOM = require('react-dom')

const { Provider } = require('react-redux')
const { createStore } = require('redux')
const rootReducer = require('../store/reducers')

const AppContainer = require('./containers/AppContainer.jsx')
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
)
