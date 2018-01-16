/** LoadingView.js
	Created by: Robert Utchel
	On: Oct 20 1:16 PM 2017
	Type: Presentation
	What does it do: It displays a loading icon or text
	Why does it do it: We need a consistin way of displaying when we are loading data.
**/

import React from 'react'

import './LoadingView.css'

const LoadingView = () => (
	<img id="loading-image" src="../static/loading.png" alt="Loading..."/>
)


export default LoadingView