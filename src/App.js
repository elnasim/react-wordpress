import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage";
import Page from "./components/Page";

class App extends Component {

  render() {
    return (
      <div>
        <header className="App-header">
          <Link to='/'><img src={logo.slice(1)} className="App-logo" alt="logo"/></Link>
        </header>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/:number' component={Page}/>
        </Switch>
      </div>
    );
  }
}

export default App;
