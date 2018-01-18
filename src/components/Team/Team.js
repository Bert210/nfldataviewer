/** Teams.js
	Created by: Robert Utchel
	On: Oct 19 3:21 PM 2017
	Type: Container
	What does it do: Populates the TeamView class with the teams data
	Why does it do it: The app needs a way to populate the correct page
**/
import React from 'react'

import ScheduleContainer from '../../containers/ScheduleContainer';
import Roster from '../Roster/Roster'
import TeamsData from '../../teamColors.json'
import './Team.css'

class Team extends React.Component {
	constructor(props) {
		super(props)

		let selectedTeam = TeamsData.find((val) => {return val.id === this.props.match.params.teamName})
		selectedTeam.logoName = this.convertNameToId(selectedTeam.name)
		this.state = {
			team: selectedTeam,
			scheduleDataLoaded: false
		}
	}

	componentDidMount(){
	}

	convertNameToId = (name) => {
		return name.replace(/\s+/g, '-').toLowerCase()
	}

	render() {
		return (
			<div className="background">
				<div className="team-container">
					<div className="title">
						<img className="team-logo" src={`../../static/logos/${this.state.team.logoName}.svg`} alt={`${this.state.team.name}'s Logo`} />
						<div style={{"color": `#${this.state.team.colors.hex[0]}`}}>{this.state.team.name}</div>
					</div>

					<div className="schedule-container">
						<ScheduleContainer team={this.state.team}/>
					</div>
					<div className="roster-container">
						{/* <Roster team={this.state.team}/> */}
					</div>
				</div>
			</div>	
			)	
	}
}

export default Team