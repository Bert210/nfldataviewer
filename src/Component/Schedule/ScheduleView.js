/** ScheduleView.js
	Created by: Robert Utchel
	On: Oct 20 7:15 AM 2017
	Type: Presentation
	What does it do: Shows the team's schedule 
	Why does it do it: The app needs a way for the user to easily see the teams schedule
**/

import React from 'react'

import OrderedList from '../Display/OrderedList'


const ScheduleView = ({games}) => {
	
	return (
		<OrderedList titles={[
			{title:"Week",key:"week"},
			{title:"Outcome",key:"outcome"},
			{title:"Opponent",key:"opponent"},
			{title:"Score",key:"score"}
			]} data={games} orderedBy="week" />
	)
}

export default ScheduleView
