import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../features/people'

const ShowPeople = ({ people, loading }) => {
	const [filter, setFilter] = useState("");
	const dispatch = useDispatch();

	if (loading) {
		return <p className="fa moviePopUp" >&#xf005;</p>
	}

	const swapiPeople = people.map((person) => {
		const handleClick = () => dispatch(actions.addToFaveList(person)
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
					<button className="addFavoriteButtonShowPeople" onClick={handleClick}>★</button> 	
				</div>
				)
			}
			else {
				return null 
			}
		}
				return (
					<div className="eachCategory" key={person.name}>
					<p className="eachCategoryName">{person.name} </p>
					<p className="eachCategoryYear">{person.birth_year} </p>
					<p className={person.eye_color}>{person.eye_color}</p>
					<button className="addFavoriteButtonShowPeople" onClick={handleClick}>★</button> 
				</div>
				)
	})

	return (
		<div className="headersAndCategories">
		<br />
<p className="searchText">Here you can search amongst our Star Wars people and add your favorites to the favorite list. If you, for any reason, don't find your favorites in our collection you can add your own in the "Favorites" tab. Then you can filter your favorites based on chosen category. Enjoy!</p> 
<br />
			<input className="SearchPeoplePlanets" type="text" placeholder="Find your favorite person..." value={filter} onChange={(e) => setFilter(e.target.value)} />
			
			<br/><br/>
			<div className="headers">
				<p>Name</p>
				<p>Birth year</p>
				<p>Eye color</p>
				<p>Favorite</p>
			</div>
			{swapiPeople}

		</div>
	)
}

export default ShowPeople;
