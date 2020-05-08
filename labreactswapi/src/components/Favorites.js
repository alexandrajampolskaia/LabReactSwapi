import React, { Component } from 'react'
import '../App.css';
import GetFavoritePeople from './GetFavoritePeople';
import GetFavoritePlanets from './GetFavoritePlanets';

class Favorites extends Component {

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
				{this.state.visible ? <GetFavoritePlanets /> : <GetFavoritePeople />}
			</div>
		)
	}


}

export default Favorites;