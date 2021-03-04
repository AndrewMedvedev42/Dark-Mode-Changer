import React from 'react'
import moment from 'moment'
import { useState } from 'react'
import { useEffect } from 'react'

const Article = ({title,date, snippet,length}) => {
  return (
    <article className="post">
      <h2>{title}t</h2>
      <div className="post-info">
        <span>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</span>
        <span>{length} min read</span>
      </div>
    <p>{snippet}</p>
    </article>)
}

export default Article
