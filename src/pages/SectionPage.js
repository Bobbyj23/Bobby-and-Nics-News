import React from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import ArticlesAPI from '../api/ArticlesAPI';

class SectionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionArticles: []
    };
  }

  componentDidMount() {
    const section = this.props.match.params.sectionID;
    this.callAPI(section);
  }

  componentDidUpdate(prevProps) {
    const section = this.props.match.params.sectionID;
    prevProps.match.params.sectionID !== section && this.callAPI(section);
  }
  
  async callAPI(section) {
    const returnedArticles = await ArticlesAPI.fetchArticlesBySection(section);
    this.setState({
      sectionArticles: returnedArticles
    })
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.state.sectionArticles} />
      </div>
    );
  }
}

export default SectionPage;