import React from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import ArticlesAPI from '../api/ArticlesAPI';
import { FormGroup, FormControl } from 'react-bootstrap';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      searchFilter: "",
    };
  }

  componentDidMount() {
    this.callAPI();
  }

  componentDidUpdate(_prevProps, prevState) {
    prevState.searchFilter !== this.state.searchFilter && this.callAPI();
}
  callAPI() {
    ArticlesAPI.fetchArticles(this.state.searchFilter)
      .then(articles_response => this.setState({articles: articles_response}));
  }

  handleSearch(e) {
    let searchText = e.target.value;
    if(searchText){searchText = `{"where":{"title":{"ilike":"${searchText}"}}}`};
    this.setState({searchFilter: searchText});
  }

  render() {
    return (
      <div>
        <FormGroup>
          <FormControl onChange={(e) => this.handleSearch(e)} type="text" placeholder="Search" />
        </FormGroup>
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}
export default HomePage;
