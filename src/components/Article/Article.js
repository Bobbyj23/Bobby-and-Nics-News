import React from 'react';

function Article({title, created_date, abstract, byline, image}){
  return (
    <div>
      <h1>{title}</h1>
      <p>{created_date}</p>
      {byline && <h2>{byline}</h2>}
      {image && <img src={image} alt=""></img>}
      <p>{abstract}</p>
    </div>
  )
}

export default Article;
