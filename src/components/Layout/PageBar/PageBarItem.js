import React from 'react'
import { Link } from 'react-router-dom'

const PageBarItem = ({ id }) => {
  return (
    // <div className=''>
    <Link className='text-light btn btn-primary' to={`/?page=${id - 1}`}>{id}</Link>
    // </div>
  )
}

export default PageBarItem
