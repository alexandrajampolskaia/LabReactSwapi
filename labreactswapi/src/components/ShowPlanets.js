import React, { useState } from 'react'

const ShowPlanets = ({ planets, loading }) => {
	const [filter, setFilter] = useState("");

	if (loading) {
		return <h3>Loading...</h3>
	}

	const planetsplanets = planets.map((planet) => {
		if (filter.length !== 0) {
			if (planet.name.toLowerCase().match(filter.toLowerCase()) ||
				planet.birth_year.toLowerCase().match(filter.toLowerCase()) ||
				planet.eye_color.toLowerCase().match(filter.toLowerCase())
			) {
				return <div className="eachCategory" key={planet.name}>
					<p>Name: {planet.name} </p>
					<p>Climate: {planet.climate} </p>
					<p>Terrain: {planet.terrain}</p>
					<button className="addFavoriteButton">My favorite</button>
				</div>
			}
			else {
				return null
			}
		}
		return <div className="eachCategory" key={planet.name}>
			<p>Name: {planet.name} </p>
			<p>Climate: {planet.climate} </p>
			<p>Terrain: {planet.terrain}</p>
			<button className="addFavoriteButton">My favorite</button>
		</div>
	})

	return (
		<div>

			<input className="SearchPeoplePlanets" type="text" placeholder="Type to search..." value={filter} onChange={(e) => setFilter(e.target.value)} />
			<br/><br/>
			{planetsplanets}

		</div>
	)
}

export default ShowPlanets;
