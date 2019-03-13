import React, { Component } from 'react'
import axios from 'axios'

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
    this.getData()
  }

  getData() {
    const { match } = this.props
    const apiUrl = `http://localhost:3000/class/get${match.url}`
    axios.get(apiUrl)
      .then((response) => {
        console.log('responseeeeeeeeeeeeeeeeeeee', response.data)
        this.setState({
          data: response.data
        })
        console.log('-this.statethis.statethis.statethis.statethis.state', this.state)
      })
      .catch(() => {
      })
  }

  render() {
    const { data } = this.state
    console.log('dataaaaaaaaaaaaRender', data)
    return (
      <div>
        <li key={data.id}>
          <p className="nav-link posts">{`${data.entitled}`}</p>
        </li>
      </div>
    )
  }
}

export default Details
