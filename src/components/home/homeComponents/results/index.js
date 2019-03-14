import React from 'react'
import { Link } from 'react-router-dom'

const Results = ({ data }) => (
  <div className="container-home">
    { data.map(item => (
      <div className="container-classes" key={item.id}>
        <h2 className="nav-link posts">{`${item.entitled}`}</h2>
        <Link className="btn btn-default" to={`/details/${item.id}`}>Click ME</Link>
      </div>
    ))}
  </div>
)

export default Results
