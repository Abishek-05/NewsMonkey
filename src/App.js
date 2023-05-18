import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import {
	BrowserRouter as Router, 
	Routes,
	Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
	//Moder way to define state without constructor
	state = {
		progress : 0
	}

	//Use arrow function or you need to bind function to this inside constructor
	setProgress = (currProg) =>{
		this.setState({progress : currProg})
	}
	render() {
		return (
			<div>
				<Router>
					<LoadingBar  height = {3} color='cyan' progress={this.state.progress} onLoaderFinished={() => this.setProgress(0)} />
					<Navbar/>
					<Routes>
						{/* key parameter is to force remount component if a different category is chosen (video 31.) */}
						<Route path = "/" element = {<News setProgress = {this.setProgress} key = "general" pageSize={6} country = "in" category = "general"/>} />
						<Route path = "/business" element = {<News setProgress = {this.setProgress} key = "business" pageSize={6} country = "in" category = "business"/>} />
						<Route path = "/entertainment" element = {<News setProgress = {this.setProgress} key = "entertainment" pageSize={6} country = "in" category = "entertainment"/>} />
						<Route path = "/health" element = {<News setProgress = {this.setProgress} key = "health" pageSize={6} country = "in" category = "health"/>} />
						<Route path = "/science" element = {<News setProgress = {this.setProgress} key = "science" pageSize={6} country = "in" category = "science"/>} />
						<Route path = "/sports" element = {<News setProgress = {this.setProgress} key = "sports" pageSize={6} country = "in" category = "sports"/>} />
						<Route path = "/technology" element = {<News setProgress = {this.setProgress} key = "technology" pageSize={6} country = "in" category = "technology"/>} />
					</Routes>
				</Router>
			</div>
		)
  	}
}

