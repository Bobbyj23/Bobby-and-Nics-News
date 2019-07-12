import React from 'react';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import SectionPage from './pages/SectionPage';
import AddArticlePage from './pages/AddArticlePage';
import LoginPage from './pages/LoginPage'


class App extends React.Component{
  state = {
    user: null
  }
  handleLogin = (user) => {
      this.setState({
        user: user
      })
  }
  
  renderLoginPage = (props) => {
    return (
      <LoginPage 
      history={props.history}
      handlelogin={(user) => this.handleLogin(user)}
      />
    )
  }

  renderAddArticlePage = (props) => {
     
      if(this.state.user){
        return <AddArticlePage user={this.state.user}/>
      }
      return <Redirect to='/'/>
    
  }

  renderLogout = (props) => {
    this.setState({user:null})
    return <Redirect to ='/Login' />
  }

  render(){
    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
        <Router>
          <div>
            <h1>News Site</h1>
            <AppNav key="nav" user={this.state.user}/>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles/:articleID" component={ArticlePage} />
            <Route exact path="/sections/:sectionID" component={SectionPage} />
            <Route exact path="/add-article" render={this.renderAddArticlePage} />
            <Route exact path="/login" render={this.renderLoginPage} />
            <Route exact path='/logout' render={this.renderLogout}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
