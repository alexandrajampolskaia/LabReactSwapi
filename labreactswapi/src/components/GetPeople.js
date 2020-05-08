import React, { useEffect, useState } from 'react';
import ShowPeople from './ShowPeople'

// GET PEOPLE FOR LOOP
function GetPeople() {
	const [people, setPeople] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		let lista = []
		let count = 1

		const fetchPeople = async () => {
			for (let i = 0; i < 9; i++) {
				let page = await fetch('https://swapi.dev/api/people/?page=' + count);
				let data = await page.json();
				count++
				data.results.forEach(element => {
					lista.push(element);
					console.log(lista)
				});
			}
			setPeople(lista)
			setLoading(false)
		}
		fetchPeople();
	},[]);


	return (
		<div>

			<ShowPeople people={people} loading={loading} />

		</div>
	);
}
export default GetPeople;