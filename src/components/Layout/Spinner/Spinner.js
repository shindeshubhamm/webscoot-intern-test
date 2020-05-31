import React from 'react'
import loader from '../../../assets/images/loader.gif'

const Spinner = () => {
  return (
    <center>
      <img className="my-5" src={loader} alt="Loading..." />
    </center>
  )
}

export default Spinner
