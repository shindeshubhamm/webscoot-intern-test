import React from 'react'
import Navbar from './Navbar/Navbar'
import PageBar from './PageBar/PageBar'

const Layout = ({ children }) => {
  // const { pages } = props
  return (
    <div>
      <Navbar />
      <div className="container">
        {children}
      </div>
      <PageBar />
    </div>
  )
}

export default Layout
