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
		const handleClick = () => dispatch(actions.addToCart(person)
		)
		

		if (filter.length !== 0) {
			if (person.name.toLowerCase().match(filter.toLowerCase()) ||
				person.birth_year.toLowerCase().match(filter.toLowerCase()) ||
				person.eye_color.toLowerCase().match(filter.toLowerCase())
			) {
				
				return (
					<div className="eachCategory" key={person.name}>
					<p className="eachCategoryName">{person.name} </p>
					<p className="eachCategoryYear">{person.birth_year} </p>
					<p className={person.eye_color}>{person.eye_color}</p>
					{/* dispatch person to store */}
					<button className="addFavoriteButtonShowPeople" onClick={handleClick}>My favorite</button> 
					
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
					<p className="eachCategoryName">{person.name} </p>
					<p className="eachCategoryYear">{person.birth_year} </p>
					<p className={person.eye_color}>{person.eye_color}</p>
					{/* dispatch person to store */}
					<button className="addFavoriteButtonShowPeople" onClick={handleClick}>My favorite</button> 
				</div>
				)
	})




	return (
		<div>

			<input className="SearchPeoplePlanets" type="text" placeholder="Type to search..." value={filter} onChange={(e) => setFilter(e.target.value)} />
			<br/><br/>
			<div className="headers">
				<p>Name</p>
				<p>Birth year</p>
				<p>Eye color</p>
				<p>Add to favorite</p>
			</div>
			{peoplepeople}

		</div>
	)
}

export default ShowPeople;
