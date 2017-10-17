import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div className="App">
        // <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <h1 className="App-title">Welcome to React</h1>
        // </header>
        // <p className="App-intro">
        //   To get started, edit <code>src/App.js</code> and save to reload.
        // </p>
      </div>
    );
  }
}

export default App;
