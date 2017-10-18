import React, { Component } from 'react';
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
    let rows = NFL_TEAMS.map((val, index, arr) => {
      return (<a href="#"><li className="team-item" key={index}>{val}</li></a>);
    })

    return (
      <div className="App">
        <ul className="team-list">
          {rows}
        </ul>
      </div>
    );
  }
}

export default App;
