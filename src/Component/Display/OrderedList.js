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

	let sortedData = []

	for(let i = 0; i < data.length; i++){
		let index = data[i][orderedBy]
		sortedData[index] = data[i]
	}

	sortedData = sortedData.map((game,index) => { 
		let data = titles.map( title => {
			let key = title.key
			let value = game[key]


			return <div className="list-item" key={key}>{value}</div>
		})

		return ( 
			<div className="list-row" key={index}>
				{data}
			</div> 
		)
	})

	let formattedTitles = titles.map((title) => {
		return (
			<div className="list-item list-title" key={title.title}>{title.title}</div>
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