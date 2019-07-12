import React from 'react';
import Article from '../components/Article/Article.js';
import ArticlesAPI from '../api/ArticlesAPI';

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.articleID;
    const returnedArticle = await ArticlesAPI.fetchArticleByID(id);
    this.setState({
      article: returnedArticle
    })
  }
    
  render() {
    return (
      <div>
        {this.state.article.title ? <Article title={this.state.article.title} created_date={this.state.article.created_date} abstract={this.state.article.abstract} byline={this.state.article.byline} image={this.state.article.image} /> : <h1>Not Found</h1>}
      </div>
    );
  }
}

export default ArticlePage;
