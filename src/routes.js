import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import Header from './components/header'
import Footer from './components/footer'
import Registration from './components/registration'
import Login from './components/login'

class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/registration" component={Registration} exact />
              <Route path="/home" component={Home} exact />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default Routes
