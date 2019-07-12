import React from 'react';
import { Link } from 'react-router-dom';

function ArticleTeaser({ id, title, created_date }) {  
  return (
    <div>
      <Link to={`/articles/${id}`}>{title}</Link>
      <p>{created_date}</p>
    </div>
  )
}

export default ArticleTeaser;
