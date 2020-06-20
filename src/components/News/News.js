import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNews } from '../../actions/newsActions'
import NewsItem from './NewsItem'
import queryString from 'query-string'
import Spinner from '../Layout/Spinner/Spinner'

const News = ({ news: { news, loading, currentParameters }, getNews, location, history }) => {
  console.log('thispage')
  const parameters = queryString.parse(location.search)
  useEffect(() => {
    getNews(parameters)
    // eslint-disable-next-line
  }, [])

  // useEffect(() => {
  //   const { page = 1, query = '' } = currentParameters
  //   history.push(`?page=${page}&query=${query}`)
  //   console.log('updated parameters')
  //   // eslint-disable-next-line
  // }, [currentParameters])

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
