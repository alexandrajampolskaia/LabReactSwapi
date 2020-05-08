import React from 'react';
import { useSelector } from 'react-redux';

// const data = [
// 	{
// 		person: { name: "Luke Skywalker", birth_year: "19BBY", eye_color: "blue" },
// 	}
// ]

const GetFavoritePeople = () => {

	const data = useSelector(state => state.cart)

	const peoplepeople = data.map(item => (
		<div key={item.person.name}>
			<p>Name: {item.person.name} </p>
			<p>Birth year: {item.person.birth_year} </p>
			<p>Eye color: {item.person.eye_color}</p>
			<button className="addFavoriteButton">Delete</button>
		</div>
	))

	return (
		<div>
		{peoplepeople}
		</div>
	)

}


export default GetFavoritePeople;