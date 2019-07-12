import React from 'react';
import ArticleTeaser from '../../components/ArticleTeaser/ArticleTeaser.js'

function ArticleList({ articles }) {
  const teasers = articles.map((article, index) => { 
      return <ArticleTeaser key={index} id={article.id} title={article.title} created_date={article.created_date} />
    });

  return (
    <div>
      {teasers}
    </div>
  );
}

export default ArticleList;
