/** OrderedList.js
	Created by: Robert Utchel
	On: Oct 20 1:16 PM 2017
	Type: Presentation
	What does it do: It takes a list of elements and orders them by input
	Why does it do it: One place to house all the order lists i will be using
**/

import React from 'react'
import PropTypes from 'prop-types'

import './OrderedList.css'

const OrderedList = ({data, orderedBy, order, titles}) => {
	console.log(data)
	// let sortedData = data.sort((a, b) => {
	// 	return parseInt(a[orderedBy],10) < parseInt(b[orderedBy],10);
	// })

	let sortedData = []

	console.log("Starting loop")
	for(let i = 0; i < data.length; i++){
		let index = data[i].week
		sortedData[index] = data[i]
	}

	sortedData = sortedData.map((game,index) => { 
		return ( 
			<div className="list-row" key={index}>
				<div className="list-item"> {game.week}</div>
				<div className="list-item">{game.outcome}</div>
				<div className="list-item">{game.opponent}</div>
				<div className="list-item"> {game.score}</div>
			</div> 
		)
	})

	let formattedTitles = titles.map((title) => {
		return (
			<div className="list-item list-title">{title}</div>
		)
	})


	return(
		<div className="list-container">
			{formattedTitles}
			{sortedData}
		</div>
	)
}

OrderedList.defaultProps = {
	order: 1
}

OrderedList.propTypes = {
	data: PropTypes.array.isRequired,
	orderedBy: PropTypes.string.isRequired,
	order: PropTypes.number,
	titles: PropTypes.array
}

export default OrderedList