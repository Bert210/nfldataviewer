/** ScheduleView.js
	Created by: Robert Utchel
	On: Oct 20 7:15 AM 2017
	Type: Presentation
	What does it do: Shows the team's schedule 
	Why does it do it: The app needs a way for the user to easily see the teams schedule
**/

import React from 'react'

import OrderedList from '../Display/OrderedList'

const formatData = (data, team) => {
	return data.map( game => {
		let isHomeGame = game.homeTeam.team === team.id

		let thisTeamScore = 0
		let otherTeamScore = 0
		let opponent = ""
		if(isHomeGame){
			thisTeamScore = game.homeTeam.score
			otherTeamScore = game.awayTeam.score
			opponent = game.awayTeam.team
		}else{
			thisTeamScore = game.awayTeam.score
			otherTeamScore = game.homeTeam.score
			opponent = game.homeTeam.team
		}

		let week = game.week.replace("NflWeek", "")

		let outcome = "-"
		if(thisTeamScore > otherTeamScore){
			outcome = "W"
		}else if(thisTeamScore === otherTeamScore) {
			outcome = "D"
		}else {
			outcome = "L"
		}

		let score = "" + thisTeamScore + " - " + otherTeamScore

		return ({
			outcome,
			opponent,
			week,
			score
		})
	})
}

const Schedule = ({ team, data}) => {
	return (
		<OrderedList 
			titles={[
				{title:"Week",key:"week"},
				{title:"Outcome",key:"outcome"},
				{title:"Opponent",key:"opponent"},
				{title:"Score",key:"score"}
			]} 
			data={formatData(data, team)} 
			orderedBy="week" 
		/>
	)
}

export default Schedule
