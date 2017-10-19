/** Teams.js
	Created by: Robert Utchel
	On: Oct 19 3:21 PM 2017
	Type: Container
	What does it do: Populates the TeamView class with the teams data
	Why does it do it: The app needs a way to populate the correct page
**/
import React from 'react'

import TeamsData from '../../teamColors.json'

class Team extends React.Component {
	render() {
		let selectedTeam = TeamsData.find((val) => {return val.id === this.props.match.params.teamName})
		console.log(selectedTeam)
		return (
			<div>
				<img src={`static/logos/${selectedTeam.logoName}.svg`} alt="Team Logo"></img>
				<div>{selectedTeam.name}</div></div>)
	}
}

export default Team