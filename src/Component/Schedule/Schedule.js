/** Schedule.js
	Created by: Robert Utchel
	On: Oct 20 1:16 PM 2017
	Type: Container
	What does it do: Formats and retrieves the data for the ScheduleView
	Why does it do it: The app needs a way for to get the data and manipulate it into an appropriate state
**/

import React from 'react'

import ScheduleView from './ScheduleView'
import LoadingView from '../Display/LoadingView'

class Schedule extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			games: undefined
		}
	}

	componentDidMount() {
		fetch(this.scheduleUrl(this.props.team.id))
			.then(data => data.json())
			.then(games => {
				let schedule = this.formatData(games)
				this.setState({
					games,
					schedule
				})

			})
	}

	scheduleUrl = (teamId) => {
		return `http://api.suredbits.com/nfl/v0/team/${teamId}/schedule`
	}

	// We don't need to pass a lot of data to the View so we can
	// trim a lot of it
	// We send an array of data type containing:
	// 	- outcome - Win Loss Draw or Unplayed denoted by - ("W")
	//	- opponent - The name of the opponent this team played ("Green Bay Packers")
	//	- score - The score of the game ("21 - 10")
	formatData = (data) => {
		return data.map( game => {
			let isHomeGame = game.homeTeam.team === game.id

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


	render() {
		if(this.state.games === undefined){
			return(<LoadingView />)
		}else{
			return <ScheduleView games={this.state.schedule} />
		}
	}
}

export default Schedule