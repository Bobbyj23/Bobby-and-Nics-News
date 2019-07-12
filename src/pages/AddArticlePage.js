import React from 'react';
import { Button } from 'react-bootstrap';
import AddArticleFormFields from '../components/AddArticleFormFields/AddArticleFormFields'
import ArticlesAPI from '../api/ArticlesAPI';

class AddArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.keysForJSON = ['title', 'byline', 'abstract'];

    this.state = {
      isLoading: false,
      };
  }
  
  handleClick(event) {
    event.preventDefault();
    this.setState({ isLoading: true });
    const articleObject = {};
    this.keysForJSON.forEach((key) => {
      let objectKey = key;
      let objectValue = event.target.elements[key].value;
      articleObject[objectKey] = objectValue;
    });
    ArticlesAPI.addArticle(articleObject, this.props.user.id)
      .then(async (r) => {
        this.setState({ isLoading: false });
        let rJSON = await r.json();
        if(!rJSON.error){
          alert('Article Added');
          document.getElementById("addArticleForm").reset();
        } else {
          alert('Title and Abstract are required');
        };
    })
  }

  render() {
    const { isLoading } = this.state
    return (
      <div key='addArticleForm'>
        <form id='addArticleForm' onSubmit={!isLoading ? (e) => this.handleClick(e) : null}>
            <h2>Create New Article</h2>
          <AddArticleFormFields key='inputs' keysForJSON={this.keysForJSON} />
          <Button
          type="submit"
          bsStyle="primary"
          bsSize="large"
          disabled={isLoading}
          block>
          {isLoading ? 'Updating Articles': 'Add Article'}
          </Button>
        </form>
      </div>
    )
    }
}

export default AddArticlePage;