import React, {useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default function App() {

	const [progress, setProgress] = useState(0);
	function handleLoaderFinished()
	{
		setProgress(0);
	}
	return (
		<div>
			<Router>
				<LoadingBar  height = {3} color='cyan' progress={progress} onLoaderFinished={handleLoaderFinished} />
				<Navbar/>
				<Routes>
					<Route path = "/" element = {<News setProgress = {setProgress} key = "general" pageSize={10} country = "in" category = "general"/>} />
					<Route path = "/business" element = {<News setProgress = {setProgress} key = "business" pageSize={10} country = "in" category = "business"/>} />
					<Route path = "/entertainment" element = {<News setProgress = {setProgress} key = "entertainment" pageSize={10} country = "in" category = "entertainment"/>} />
					<Route path = "/health" element = {<News setProgress = {setProgress} key = "health" pageSize={10} country = "in" category = "health"/>} />
					<Route path = "/science" element = {<News setProgress = {setProgress} key = "science" pageSize={10} country = "in" category = "science"/>} />
					<Route path = "/sports" element = {<News setProgress = {setProgress} key = "sports" pageSize={10} country = "in" category = "sports"/>} />
					<Route path = "/technology" element = {<News setProgress = {setProgress} key = "technology" pageSize={10} country = "in" category = "technology"/>} />
				</Routes>
			</Router>
		</div>
	)
}

