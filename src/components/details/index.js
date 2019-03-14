import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
        <h2>{`${data.entitled}`}</h2>
        <li key={data.id}>
          <p className="nav-link posts">{`${data.entitled}`}</p>
          <Link className="btn btn-default" to={`/editor/${data.id}`}>Voir le cours</Link>
        </li>
      </div>
    )
  }
}

export default Details
