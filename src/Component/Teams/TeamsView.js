/** TeamsView.js
	Created by: Robert Utchel
	On: Oct 18 7:50 AM 2017
	Type: Presentational
	What does it do: Renders a list of all the NFL teams
	Why does it do it: The app needs a way for the user to easily pick an NFL team
**/

import React from 'react'
import {PropTyes} from 'react'

const TeamsView = ({teams}) => (
	<div className="team-view">
		{teams}
	</div>
)

// TeamsView.propTypes = {
// 	teams: PropTyes.array.isRequired
// }

export default TeamsView