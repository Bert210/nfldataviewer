/** RosterView.js
	Created by: Robert Utchel
	On: Oct 22 4:42 AM 2017
	Type: Presentation
	What does it do: Shows the team's schedule 
	Why does it do it: The app needs a way for the user to easily see the teams schedule
**/

import React from 'react'

import OrderedList from '../Display/OrderedList'

const titles = [
				{title:"Uniform Number", key:"uniformNumber"},
				{title:"Name",key:"fullName"},
				{title:"Position",key:"position"},
				{title:"Birth Date",key:"birthDate"},
				{title:"Status",key:"status"},
				{title:"College",key:"college"},
				]

const Roster = ({ data }) => {
	return (
		<div>
			<h3>Roster</h3>
			<OrderedList titles={titles} data={data} orderedBy="uniformNumber" />
		</div>
	)
}

export default Roster
