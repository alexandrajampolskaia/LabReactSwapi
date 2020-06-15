import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../features/people'

const ShowPlanets = ({ planets, loading }) => {
	const [filter, setFilter] = useState("");
	const dispatch = useDispatch();

	if (loading) {
		return <p className="fa moviePopUp" >&#xf005;</p>
	}

	const swapiPlanets = planets.map((planet) => {
		const handleClick = () => dispatch(actions.addToCart(planet)
		)

		if (filter.length !== 0) {
			if (planet.name.toLowerCase().match(filter.toLowerCase()) ||
				planet.climate.toLowerCase().match(filter.toLowerCase()) ||
				planet.terrain.toLowerCase().match(filter.toLowerCase())
			) {

				return (
					<div className="eachCategory" key={planet.name}>
					<p>{planet.name} </p>
					<p>{planet.climate} </p>
					<p>{planet.terrain}</p>
					<button className="addFavoriteButtonShowPeople" onClick={handleClick}>★</button> 
				</div>
				)
			}
			else {
				return null
			}
		}
		return (
			<div className="eachCategory" key={planet.name}>
			<p>{planet.name} </p>
			<p>{planet.climate} </p>
			<p>{planet.terrain}</p>
			<button className="addFavoriteButtonShowPeople" onClick={handleClick}>★</button> 
		</div>
		)
	})

	return (
		<div className="headersAndCategories">
		<p className="searchText">Here you can search amongst our Star Wars planets and add your favorites to the favorite list. If you, for any reason, don't find your favorites in our collection you can add your own in the "Favorites" tab. Then you can filter your favorites based on chosen category. Enjoy!</p> 
			<input className="SearchPeoplePlanets" type="text" placeholder="Find your favorite planet..." value={filter} onChange={(e) => setFilter(e.target.value)} />
			
			<br/><br/>
			<div className="headers">
				<p>Planet</p>
				<p>Climate</p>
				<p>Terrain</p>
				<p>Add to favorite</p>
			</div>
			{swapiPlanets}
		</div>
	)
}

export default ShowPlanets;
