import React, { Component } from 'react'
import '../App.css';
import GetPeopleAPI from './GetPeopleAPI';
import GetPlanetsAPI from './GetPlanetsAPI';

class Home extends Component {

	state = {
		visible: false,
	}

	render() {

		const togglePeoplePlanets = this.state.visible ? "Show People" : "Show Planets";
		// const togglePeoplePlanetstext = this.state.visible ? "See all the planets below" : "See all the people below";

		return (
			<div>
				<button className="togglePeoplePlanetsButton" onClick={() => {
					this.setState({ visible: !this.state.visible });
				}}>
					{togglePeoplePlanets}</button>
				{/* <h3>{togglePeoplePlanetstext}</h3> */}
				{this.state.visible ? <GetPlanetsAPI /> : <GetPeopleAPI />} 
			</div>
		)
	}


}

export default Home;
