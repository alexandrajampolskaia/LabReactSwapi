import React, { useEffect, useState } from 'react';
import ShowPeople from './ShowPeople'
// import Pagination from './Pagination'

// GET PEOPLE FOR LOOP
function GetPeople() {
	const [people, setPeople] = useState([]);
	const [loading, setLoading] = useState(true);
	// const [filter, setFilter] = useState("");
	// const [currentPage, setCurrentPage] = useState(1);
	// const [postsPerPage] = useState(10);

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

	// const indexOfLastPost = currentPage * postsPerPage;
	// const indexOfFirstPost = indexOfLastPost - postsPerPage;
	// const currentPosts = people.slice(indexOfFirstPost, indexOfLastPost)

	// const paginate = (pageNumber) => setCurrentPage(pageNumber)

	return (
		<div>

			<ShowPeople people={people} loading={loading} />
			{/* <Pagination postsPerPage={postsPerPage} totalPosts={people.length} paginate={paginate} /> */}

			{/* <input
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
								</div>
						} else {
							return null
						}
					}
					return <div className="eachCategory" key={person.name}>
						<p>Name: {person.name} </p>
						<p>Birth year: {person.birth_year} </p>
						<p>Eye color: {person.eye_color}</p>
						</div>
				})}
			</div> */}

		</div>
	);
}
export default GetPeople;