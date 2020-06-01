import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar/Navbar'
import PageBar from './PageBar/PageBar'

const Layout = ({ children, news: { pages } }) => {
  // const { pages } = props
  return (
    <div>
      <Navbar />
      <div className="container">
        {children}
      </div>
      <PageBar pages={pages} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  news: state.news
})

export default connect(mapStateToProps, null)(Layout)
