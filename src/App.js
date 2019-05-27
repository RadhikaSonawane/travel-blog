import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Page from './components/Page';
import Post from './components/Post';
import Singlepage from './components/Single-page';
import Menu from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Menu/>
            <Route path='/' exact component={Home} />
            <Route path='/page/:id' component={Page} />
            <Route path='/post/:id' component={Singlepage} />
            <Route path='/post/:id' component={Post} />
            <Footer/>
          </Router>  
      </div>
    );
  }
}

export default App;
