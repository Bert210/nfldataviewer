/** TeamsView.js
	Created by: Robert Utchel
	On: Oct 18 7:50 AM 2017
	Type: Presentational
	What does it do: Renders a list of all the NFL teams
	Why does it do it: The app needs a way for the user to easily pick an NFL team
**/

import React from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import './TeamsView.css'

const TeamsView = ({teams}) => {
	let formattedTeams = teams.map((val, index) => {
		let bgColor = `#${val.colors.hex[0]}`
		return (
		<Link key={val.id} to={`/team/${val.id}`} className="team-listing" style={{"borderColor":bgColor}}>
			<div>
				<img className="team-logo" src={`static/logos/${val.logoName}.svg`} alt="logo"/>
			</div>
			<div className="divider" style={{display: "inline-block", width: "100%", height: "1px", backgroundColor: "black"}}/>
			<div style={{color: bgColor}}>
				{val.name}
			</div>
		</Link>
		)
	})

	return (
	<div className="teams-view">
		{formattedTeams}
	</div>
)}

TeamsView.propTypes = {
	teams: PropTypes.array.isRequired
}

export default TeamsView