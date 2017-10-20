/** ScheduleView.js
	Created by: Robert Utchel
	On: Oct 20 7:15 AM 2017
	Type: Presentation
	What does it do: Shows the team's schedule 
	Why does it do it: The app needs a way for the user to easily see the teams schedule
**/

import React from 'react'


const ScheduleView = ({loading, games}) => {
	let data = "Loading..."
	if(!loading){
		data = games.map((game,index) => (
			<div key={index}>
				<span>{game.homeGame ? "Home" : "Away" }</span>
				<span> {game.dayOfWeek}</span>
			</div>
		))
	}
	return (
		<ol>
			<div>
				<span>Home Game</span>
				<span>Day of the Week</span>
			</div>
			{data}
		</ol>
	)
}

export default ScheduleView
