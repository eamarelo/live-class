import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDetailsData } from './detailsActions'
import TheDetails from './detailsComponents/theDetails/index.js'

class Details extends Component {
  componentDidMount() {
    getDetailsData()
  }

  render() {
    const { details } = this.props
    return (
      <div>
        <TheDetails data={details.data} />
      </div>
    )
  }
}

export default connect(state => state)(Details)
