import React from 'react'
import { connect } from 'react-redux'
import { updateParameters } from '../../../actions/newsActions'
import ReactPaginate from 'react-paginate'

const PageBar = ({ news: { pages, currentParameters }, updateParameters }) => {
  const pageChange = ({ selected }) => {
    const newParameters = {
      ...currentParameters,
      page: selected
    }
    updateParameters(newParameters)
  }
  return (
    <nav aria-label="Change Page" className="my-5">
      <ReactPaginate
        pageCount={pages}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        previousLabel='&laquo;'
        nextLabel='&raquo;'
        breakLabel='&middot; &middot; &middot;'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination justify-content-center'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        activeClassName='page-item active'
        previousClassName='page-item'
        nextClassName='page-item'
        previousLinkClassName='page-link'
        nextLinkClassName='page-link'
        disabledClassName='page-item disabled'
        onPageChange={pageChange}
      />
    </nav>
  )
}

const mapStateToProps = (state) => ({
  news: state.news
})

export default connect(mapStateToProps, { updateParameters })(PageBar)