import React from 'react';
import navItems from '../../config/Sections.json'
import { Link } from 'react-router-dom';

function AppNav({user}) {

  const headerBar = navItems.map((item, index) => {
    return (
        <Link to={`/sections/${item.value}`} key={index}>{item.label}</Link>
    )
  })

  const loginLogut = (user) => {
    if(!user){
      return (<Link to='/login'>LOGIN</Link>)
    };
    return(<Link to='/logout'>LOGOUT</Link>)
  }

  const handleAddArticle = (user) => {
    if(user){
      return (<Link to='/add-article'>ADD ARTICLE</Link>)
    };
  }

  return (
    <nav>
      <div className="navbar">
        {loginLogut(user)}
        {headerBar}
        {handleAddArticle(user)}
      </div>  
    </nav> 
  )
}

export default AppNav;
