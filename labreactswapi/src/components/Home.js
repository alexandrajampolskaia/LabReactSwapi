import React, { Component } from 'react'
import '../App.css';
import GetPeople from './GetPeople';
import GetPlanets from './GetPlanets';

class Home extends Component {

	state = {
		visible: false,
	}

	render() {

		const togglePeoplePlanets = this.state.visible ? "Show People" : "Show Planets";

		return (
			<div>
				<button className="togglePeoplePlanetsButton" onClick={() => {
					this.setState({ visible: !this.state.visible });
				}}>
					{togglePeoplePlanets}</button>
				{this.state.visible ? <GetPlanets /> : <GetPeople />}
			</div>
		)
	}


}

export default Home;
