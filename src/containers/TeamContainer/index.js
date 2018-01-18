/** Teams.js
	Created by: Robert Utchel
	On: Oct 19 3:21 PM 2017
	Type: Container
	What does it do: Populates the Team class with the teams data
	Why does it do it: The app needs a way to populate the correct page
**/
import React from 'react'
import Team from '../../components/Team';

import TeamsData from '../../teamColors.json'

class TeamContainer extends React.Component {
	constructor(props) {
		super(props)

		let selectedTeam = TeamsData.find((val) => {
            return val.id === this.props.match.params.teamName
        })
		selectedTeam.logoName = this.convertNameToId(selectedTeam.name)
		this.state = {
			team: selectedTeam,
			scheduleDataLoaded: false
		}
	}

	convertNameToId = (name) => {
		return name.replace(/\s+/g, '-').toLowerCase()
	}

	render() {
        console.log(this.state);
		return (
			<Team {...this.props} team={this.state.team}/>
		)	
	}
}

export default TeamContainer