import React from 'react'
import ReactDOM from 'react-dom'
import App from '../shared/app.jsx'
import Gallary from '../shared/components/Gallary.jsx'
import Modal from '../shared/components/Modal.jsx'
import AuthenticateRoute from '../shared/utlis/Protected.jsx'

import { AppContainer } from 'react-hot-loader'
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import store from '../configureStore'

const render = (Component) => {
  ReactDOM.render(
    wrapApp(App),
    document.getElementById('root')
  )
}

const wrapApp = (AppComponent) =>

  <Provider store = {store}>
      <AppContainer>
        <Router>

            <div className="container">
            <Route exact path="/" component={AppComponent} />
            <Route exact path="/gallary" component={AuthenticateRoute(Gallary)} />
            <Modal/>

            </div>
        </Router>
      </AppContainer>
  </Provider>


render(App);

if (module.hot) {
  module.hot.accept('../shared/app.jsx', () => {
    render(App)
  });
}
