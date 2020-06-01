import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNews } from '../../actions/newsActions'
import NewsItem from './NewsItem'
import Spinner from '../Layout/Spinner/Spinner'

const News = ({ news: { news, loading }, getNews, location }) => {
  useEffect(() => {
    const parameters = location.search.slice('1')
    // console.log(parameters)
    getNews(parameters)
    // eslint-disable-next-line
  }, [location])

  if (loading || news === null) {
    return <Spinner />
  }

  return (
    <div>
      {!loading && news.length === 0 ? <h2>No results found.</h2> : news.map(n => <NewsItem newsItem={n} key={n.objectID} />)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  news: state.news
})

export default connect(mapStateToProps, ({ getNews }))(News)
