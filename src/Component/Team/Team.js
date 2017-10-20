/** Teams.js
	Created by: Robert Utchel
	On: Oct 19 3:21 PM 2017
	Type: Container
	What does it do: Populates the TeamView class with the teams data
	Why does it do it: The app needs a way to populate the correct page
**/
import React from 'react'

import Schedule from '../Schedule/Schedule'
import TeamsData from '../../teamColors.json'

class Team extends React.Component {
	constructor(props) {
		super(props)
		// let teams = TeamsData.map((val, index) => {
		// 	val.logoName = this.convertNameToId(val.name)
		// 	return val
		// })
		let selectedTeam = TeamsData.find((val) => {return val.id === this.props.match.params.teamName})
		selectedTeam.logoName = this.convertNameToId(selectedTeam.name)
		this.state = {
			team: selectedTeam,
			scheduleDataLoaded: false
		}
	}

	componentDidMount(){
		fetch(this.scheduleUrl(this.state.team.id))
			.then(data => data.json())
			.then(data => this.setState({
				games: data,
				scheduleDataLoaded: true
			}))
	}

	convertNameToId = (name) => {
		return name.replace(/\s+/g, '-').toLowerCase()
	}

	scheduleUrl = (teamId) => {
		return `http://api.suredbits.com/nfl/v0/team/${teamId}/schedule`
	}

	render() {
		return (
			<div>
				<img src={`../static/logos/${this.state.team.logoName}.svg`} alt={`${this.state.team.name}'s Logo`} />
				<div style={{"color": `#${this.state.team.colors.hex[0]}`}}>{this.state.team.name}</div>
				
				<Schedule currentTeam={this.state.team} loading={!this.state.scheduleDataLoaded} games={this.state.games}/>
			</div>
			)	
	}
}

export default Team