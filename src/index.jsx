import 'babel-polyfill'
import 'react-app-polyfill/ie9'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import { LoginCallback, SearchPage } from 'views'
import { PrivateRoute } from 'components'
import App from 'App'

import registerServiceWorker from 'registerServiceWorker'


{/* Roteamento para as 3 páginas principais da aplicação: Home, Search e Artista */}
ReactDOM.render(
  <Router>
   <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute path="/" exact component={App} />
      <PrivateRoute exact path="/search" component={SearchPage}/>
    </Switch>
  </Router>,
  document.getElementById('root'),
)

registerServiceWorker()
