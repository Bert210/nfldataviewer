import React from 'react'

import {NavLink} from 'react-router-dom'

import './Nav.css'

const Nav = () => {
	return(
		<div className="nav-body">
			<div className="nav-site-name">
				NFL Data Viewer
			</div>
			<div>
				<ul>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/teams">Teams</NavLink>
				</ul>
			</div>
		</div>
	);
}

export default Nav