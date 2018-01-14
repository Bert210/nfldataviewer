 import React, { Component } from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'

import Nav from './Component/Nav/Nav'
import Teams from './Component/Teams/Teams'
import Team from './Component/Team/Team'

// var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
// const getRosterURL = (team) => {
//   return `http://api.suredbits.com/nfl/v0/team/${team}/roster`
//   // return 'http://api.suredbits.com/nfl/v0/info/'
// }

class App extends Component {
  componentDidMount() {
    // fetch(proxyUrl + getRosterURL(NFL_TEAMS[0]))
    //   .then(d => d.json())
    //   .then(d => console.log(d))
  }

  render() {
    return (
      <BrowserRouter basename={'/nfldataviewer'}>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Teams} />
          <Route path="/teams" component={Teams} />
          <Route path="/team/:teamName" component={Team}/>
          <Route path="*" render={() => "Page Not Found"}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
