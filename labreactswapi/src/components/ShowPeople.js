import React, { useState } from 'react'

const ShowPeople = ({ people, loading }) => {
	const [filter, setFilter] = useState("");

	if (loading) {
		return <h3>Loading...</h3>
	}

	return (
		<div>

			<input
				className="SearchPeoplePlanets" type="text" placeholder="Type to search..."
				value={filter} onChange={(e) => setFilter(e.target.value)} />
			<div className="showPeopleDiv">
				{people.map((person) => {
					if (filter.length !== 0) {
						if (person.name.toLowerCase().match(filter.toLowerCase()) ||
							person.birth_year.toLowerCase().match(filter.toLowerCase()) ||
							person.eye_color.toLowerCase().match(filter.toLowerCase())
						) {
							return <div className="eachCategory" key={person.name}>
								<p>Name: {person.name} </p>
								<p>Birth year: {person.birth_year} </p>
								<p>Eye color: {person.eye_color}</p>
								<button className="addFavoriteButton">My favorite</button>
							</div>
						} else {
							return null
						}
					}
					return <div className="eachCategory" key={person.name}>
						<p>Name: {person.name} </p>
						<p>Birth year: {person.birth_year} </p>
						<p>Eye color: {person.eye_color}</p>
						<button className="addFavoriteButton">My favorite</button>

					</div>
				})}
			</div>
		</div>
	)
}

export default ShowPeople;