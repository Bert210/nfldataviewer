/** Player.js
	Created by: Robert Utchel
	On: Oct 22 4:31 PM 2017
	Type: Container
	What does it do: Formats and retrieves the data for the PlayerView
	Why does it do it: The app needs a way for to get the data and manipulate it into an appropriate state
**/

import React from 'react'

import Roster from '../../components/Roster';

import { loadRoster } from './actions';
import { connect } from 'react-redux';

class RosterContainer extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			players: undefined
		}
	}

	componentWillMount() {
		this.props.loadRoster(this.props.team);
	}

	rosterURL = (team) => {
		return `http://api.suredbits.com/nfl/v0/team/${team}/roster`
	}

	render() {
        return <Roster {...this.props}/>;
	}
}

const mapStateToProps = (state) => ({
	data: state.roster.get('data'),
})

const mapDispatchToProps = (dispatch) => ({
	loadRoster: (team) => {dispatch(loadRoster(team))},
})

export default connect(mapStateToProps, mapDispatchToProps)(RosterContainer);