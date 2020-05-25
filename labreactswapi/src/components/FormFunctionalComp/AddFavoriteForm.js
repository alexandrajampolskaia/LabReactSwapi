import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FadeEffect from '../FadeEffect'


function AddFavoriteForm({ addPerson }) {
	const [person, setPerson] = useState({ id: "", name: "", birth_year: "",  eye_color: "", completed: false });
	const [show, setShow] = useState(false);
	const [errorMessage, setErrorMessage] = useState("")
	// const [errorNumber, setErrorNumber] = useState("")

	const handleChange = e => {
		setPerson({
			...person,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!person.name || !person.birth_year || !person.eye_color) {
			setErrorMessage("Fill out all fields")
		} else {
			setErrorMessage("Successfully added")
			addPerson({ ...person, id: uuidv4()})
			setPerson({ ...person, name: ""}, { ...person, birth_year: ""}, { ...person, eye_color: ""})
		}	
	}

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	if(!person.name) {
	// 		setErrorMessage("Please add name") 
	// 	} if (person.birth_year !== Number) {
	// 		setErrorNumber("Must be a number")
	// 	} if (!person.eye_color) {
	// 		setErrorMessage("Please add name")
	// 	} else {
	// 		setErrorMessage("Successfully added")
	// 		addPerson({ ...person, id: uuidv4()})
	// 		setPerson({ ...person, name: ""}, { ...person, birth_year: ""}, { ...person, eye_color: ""})
	// 	}	
	// }

	return (
		<div>
		<FadeEffect show={show}>
		<div className="popUpModal">
		<form className="addFavoriteForm" onSubmit={handleSubmit}>
		<p className="closeFormX"  onClick={() => setShow(show => !show)}>X</p>
			<div>
			<label>Name: </label> 
			<br />
			<input type="text" name="name" value={person.name} onChange={handleChange}/> 
			</div>		
 
			<div>
			<label>Birth year: </label> 
			{/* <span>{errorNumber}</span> */}
			<br />
			<input type="text" name="birth_year" value={person.birth_year} onChange={handleChange}/>
			</div>	

			<div>
			<label>Eye color: </label> 
			<br />
			<input type="text" name="eye_color" value={person.eye_color} onChange={handleChange}/>	
			</div>

			<br/>
			<button type="submit" className="addFavoriteButton" >Add</button>
			<div className='broadcast-message'>{errorMessage}</div>
		</form>
		</div>
</FadeEffect> 
		<button className="showAddFavoriteForm" onClick={() => setShow(show => !show)}> add custom</button>
		</div>
	)
}

export default AddFavoriteForm;