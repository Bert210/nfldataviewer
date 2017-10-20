/** Schedule.js
	Created by: Robert Utchel
	On: Oct 20 1:16 PM 2017
	Type: Container
	What does it do: Formats and retrieves the data for the ScheduleView
	Why does it do it: The app needs a way for to get the data and manipulate it into an appropriate state
**/

import React from 'react'

import ScheduleView from './ScheduleView'

class Schedule extends React.Component {
	constructor(props){
		super(props)
	}

	render() {
		let formattedGames = null
		console.log('this.props.currentTeam:', this.props.currentTeam)
		if(!this.props.loading) {
			formattedGames = this.props.games.map(game => {
				if(this.props.currentTeam.id === game.homeTeam.team)
					game.homeGame = true
				else
					game.homeGame = false
			})
		}
		return (
			<ScheduleView loading={this.props.loading} games={this.props.games} />
		)
	}
}

export default Schedule