/** Teams.js
	Created by: Robert Utchel
	On: Oct 18 7:50 AM 2017
	Type: Container
	What does it do: Populates the TeamsView class with the teams data
	Why does it do it: The app needs a way for the user to easily pick an NFL team
**/

import React, {Component} from 'react'

import TeamsView from './TeamsView'

class Teams extends Component {
	constructor(props){
		super(props)
		this.state = {
			teams: ["ARI","ATL","BAL","BUF","CAR","CHI","CIN","CLE","DAL","DEN","DET","GB","HOU","IND","JAC","KC","LA","MIA","MIN","NE","NO","NYG","NYJ","OAK","PHI","PIT","SD","SEA","SF","TB","TEN","WAS"]
		}
	}

	render() {
		return <TeamsView teams={this.state.teams}/>
	}
}

export default Teams