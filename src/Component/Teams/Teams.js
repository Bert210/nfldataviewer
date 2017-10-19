/** Teams.js
	Created by: Robert Utchel
	On: Oct 18 7:50 AM 2017
	Type: Container
	What does it do: Populates the TeamsView class with the teams data
	Why does it do it: The app needs a way for the user to easily pick an NFL team
**/

import React, {Component} from 'react'

import TeamsView from './TeamsView'

import TeamsData from '../../static/teamColors.json'

class Teams extends Component {
	constructor(props){
		super(props)
		let teams = TeamsData.map((val, index) => {
			val.logoName = this.convertNameToId(val.name)
			return val
		})
		this.state = {
			teams
		}
	}

	convertNameToId = (name) => {
		return name.replace(/\s+/g, '-').toLowerCase()
	}

	render() {
		return <TeamsView teams={this.state.teams}/>
	}
}

export default Teams