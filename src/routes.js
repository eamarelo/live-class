import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import Header from './components/header'
import Footer from './components/footer'
import Registration from './components/registration'
import Login from './components/login'
import Editor from './components/editor'
import Details from './components/details'

class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/registration" component={Registration} exact />
              <Route path="/details/:id" component={Details} exact />
              <Route path="/editor/:id" component={Editor} exact />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Routes
