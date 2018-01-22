/** Teams.js
	Created by: Robert Utchel
	On: Oct 19 3:21 PM 2017
	Type: Container
	What does it do: Populates the TeamView class with the teams data
	Why does it do it: The app needs a way to populate the correct page
**/
import React from 'react'

import ScheduleContainer from '../../containers/ScheduleContainer';
import RosterContainer from '../../containers/RosterContainer';
import './Team.css'

const Team = ({ team }) => {
	return (
		<div className="background">
			<div className="team-container">
				<div className="title">
					<img 
						className="team-logo" 
						src={`../../static/logos/${team.logoName}.svg`} 
						alt={`${team.name}'s Logo`} 
					/>
					<div style={{"color": `#${team.colors.hex[0]}`}}>
						{team.name}
					</div>
				</div>

				<div className="schedule-container">
					<ScheduleContainer team={team}/>
				</div>
				<div className="roster-container">
					<RosterContainer team={team}/>
				</div>
			</div>
		</div>	
	)
}

export default Team