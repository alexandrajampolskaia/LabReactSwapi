import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Favorites from './components/Favorites';
// import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

	return (
		<Router>
			<div className="App">
			<Nav />
				<Switch>
				<Route path="/" exact component={Home} /> 
				<Route path="/home" component={Home} />
				<Route path="/favorites" component={Favorites} />
				</Switch>
				{/* <Footer /> */}
			</div>
			
		</Router>
	);
}


export default App;
