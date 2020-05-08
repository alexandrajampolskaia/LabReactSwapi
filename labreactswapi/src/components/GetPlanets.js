import React, { useEffect, useState } from 'react';
import ShowPlanets from './ShowPlanets'

// GET PEOPLE FOR LOOP
function GetPlanets() {
	const [planets, setPlanets] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		let lista = []
		let count = 1

		const fetchPlanets = async () => {
			for (let i = 0; i < 4; i++) {
				let page = await fetch('https://swapi.dev/api/planets/?page=' + count);
				let data = await page.json();
				count++
				data.results.forEach(element => {
					lista.push(element);
					console.log(lista)
				});
			}
			setPlanets(lista)
			setLoading(false)
		}
		fetchPlanets();
	},[]);

 
	return (
		<div>

			<ShowPlanets planets={planets} loading={loading} />

		</div>
	);
}
export default GetPlanets;