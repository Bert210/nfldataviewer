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
		return <Link to={`/team/${val}`} className="team-listing">{val}</Link>
	})

	return (
	<div className="team-view">
		{formattedTeams}
	</div>
)}

TeamsView.propTypes = {
	teams: PropTypes.array.isRequired
}

export default TeamsView