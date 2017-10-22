/** Player.js
	Created by: Robert Utchel
	On: Oct 22 4:31 PM 2017
	Type: Container
	What does it do: Formats and retrieves the data for the PlayerView
	Why does it do it: The app needs a way for to get the data and manipulate it into an appropriate state
**/

import React from 'react'

import RosterView from './RosterView'
import LoadingView from '../Display/LoadingView'

class Roster extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			players: undefined
		}
	}

	componentDidMount() {
		fetch(this.rosterURL(this.props.team.id))
			.then(d => d.json())
			.then(d => {
				this.setState({
					players: d
				})
			})
	}

	rosterURL = (team) => {
		return `http://api.suredbits.com/nfl/v0/team/${team}/roster`
	}

	render() {
		if(this.state.players === undefined){
			return <LoadingView />
		}else{
			return <RosterView players={this.state.players}/>
			// return <h3>Roster</h3>
		}
	}
}

export default Roster