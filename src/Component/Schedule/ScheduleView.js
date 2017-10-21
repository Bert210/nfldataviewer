/** ScheduleView.js
	Created by: Robert Utchel
	On: Oct 20 7:15 AM 2017
	Type: Presentation
	What does it do: Shows the team's schedule 
	Why does it do it: The app needs a way for the user to easily see the teams schedule
**/

import React from 'react'


const ScheduleView = ({games}) => {
	let data = "Loading..."
	data = games.map((game,index) => (
		<div key={index}>
			<span>{game.outcome}</span>
			<span> {game.opponent}</span>
			<span> {game.score}</span>
		</div>
	))
	
	return (
		<div>
			<span>Week</span>
			<span>W/N</span>
			<span>Time and Date</span>
			<span>Opponent</span>
			<span>Score</span>
		</div>	
		<ol>
			{data}
		</ol>
	)
}

export default ScheduleView
