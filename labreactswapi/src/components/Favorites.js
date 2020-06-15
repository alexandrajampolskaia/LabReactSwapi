import React, { Component } from 'react'
import '../App.css';
import GetFavoriteMoreOptions from './GetFavoriteMoreOptions';
import GetAllFavorites from './GetAllFavorites';

class Favorites extends Component {

	state = {
		visible: false,
	}

	render() {

		const togglePeoplePlanets = this.state.visible ? "Show All" : "More options";

		return (
			<div>
				<button className="togglePeoplePlanetsButton" onClick={() => {
					this.setState({ visible: !this.state.visible });
				}}>
					{togglePeoplePlanets}</button>
				{this.state.visible ?  <GetFavoriteMoreOptions /> : <GetAllFavorites /> }
				
			</div>
		)
	}


}

export default Favorites;