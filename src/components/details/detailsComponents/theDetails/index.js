import React from 'react'
import { Link } from 'react-router-dom'

const TheDetails = ({ data }) => (
  <div>
    <h2>{`${data.entitled}`}</h2>
    <li key={data.id}>
      <p className="nav-link posts">{`${data.entitled}`}</p>
      <Link className="btn btn-default" to={`/editor/${data.id}`}>Voir le cours</Link>
    </li>
  </div>
)

export default TheDetails
