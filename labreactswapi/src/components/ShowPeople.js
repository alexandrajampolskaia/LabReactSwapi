import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../features/cart'

const ShowPeople = ({ people, loading }) => {
	const [filter, setFilter] = useState("");
	const dispatch = useDispatch();

	if (loading) {
		return <h3>Loading...</h3>
	}

	const peoplepeople = people.map((person) => {
		const handleClick = () => dispatch(actions.addToCart(person))
		
		if (filter.length !== 0) {
			if (person.name.toLowerCase().match(filter.toLowerCase()) ||
				person.birth_year.toLowerCase().match(filter.toLowerCase()) ||
				person.eye_color.toLowerCase().match(filter.toLowerCase())
			) {
				
				return (
					<div className="eachCategory" key={person.name}>
					<p>Name: {person.name} </p>
					<p>Birth year: {person.birth_year} </p>
					<p>Eye color: {person.eye_color}</p>
					{/* dispatch person to store */}
					<button className="addFavoriteButton" onClick={handleClick}>My favorite</button> 
				</div>
				)
			}
			else {
				return null 
			}
		}
		// const handleClick = () => dispatch(actions.addToCart(person))
				return (
					<div className="eachCategory" key={person.name}>
					<p>Name: {person.name} </p>
					<p>Birth year: {person.birth_year} </p>
					<p>Eye color: {person.eye_color}</p>
					{/* dispatch person to store */}
					<button className="addFavoriteButton" onClick={handleClick}>My favorite</button> 
				</div>
				)
	})

	return (
		<div>

			<input className="SearchPeoplePlanets" type="text" placeholder="Type to search..." value={filter} onChange={(e) => setFilter(e.target.value)} />

			{peoplepeople}

		</div>
	)
}

export default ShowPeople;
