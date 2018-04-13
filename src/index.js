import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/semantic.less'
import './styles/app.less'

import App from './App'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Component />
      </Router>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => { render(App) })
}
