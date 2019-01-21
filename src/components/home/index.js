import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEventsData } from './homeActions'
import Results from './homeComponents/results/index.js'

class Home extends Component {
  componentDidMount() {
    getEventsData()
  }

  render() {
    const { home } = this.props
    return (
      <div>
        <Results data={home.data} />
      </div>
    )
  }
}

export default connect(state => state)(Home)
