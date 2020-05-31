import React from 'react'
import Moment from 'react-moment'

const NewsItem = ({ newsItem }) => {
  const { created_at, points, title, author, url, num_comments } = newsItem
  return (
    <div>
      {console.log(newsItem)}
      <div className="card my-2" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted"><a href={url} className="text-muted">{url}</a></h6>
          <p className="card-text">{points} points | {author} | <Moment fromNow date={created_at} /> | {num_comments} Comments</p>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
