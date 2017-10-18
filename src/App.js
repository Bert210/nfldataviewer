import React, { Component } from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'

import Nav from './Component/Nav/Nav'
import Teams from './Component/Teams/Teams'

const NFL_TEAMS = ["ARI","ATL","BAL","BUF","CAR","CHI","CIN","CLE","DAL","DEN","DET","GB","HOU","IND","JAC","KC","LA","MIA","MIN","NE","NO","NYG","NYJ","OAK","PHI","PIT","SD","SEA","SF","TB","TEN","WAS"]
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const getRosterURL = (team) => {
  return `http://api.suredbits.com/nfl/v0/team/${team}/roster`
  // return 'http://api.suredbits.com/nfl/v0/info/'
}

class App extends Component {
  componentDidMount() {
    fetch(proxyUrl + getRosterURL(NFL_TEAMS[0]))
      .then(d => d.json())
      .then(d => console.log(d))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Teams} />
          <Route path="/teams" component={Teams} />

          <Route path="/team/:teamName" render={(props) => {
            return(<div>{props.match.params.teamName}</div>)
          }} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
