import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FadeEffect from '../FadeEffect'


function AddFavoriteForm({ addCustom }) {
	const [custom, setCustom] = useState({ id: "", name: "", yearclimate: "",  colorterrain: "", completed: false });
	const [show, setShow] = useState(false);
	const [errorMessage, setErrorMessage] = useState("")
	const [errorMessageNamePerson, seterrorMessageNamePerson] = useState("")
	const [errorMessageBirthYear, setErrorMessageBirthYear] = useState("")
	const [errorMessageEyeColor, setErrorMessageEyeColor] = useState("")
	const [showForm, setShowForm] = useState("people")
	const [isNameTouched, setIsNameTouched] = useState(false)
	const [isBirthYearTouched, setIsBirthYearTouched] = useState(false)
	const [isEyeColorTouched, setIsEyeColorTouched] = useState(false)
	const [errorMessageNamePlanet, setErrorMessageNamePlanet] = useState("")
	const [errorMessageClimate, setErrorMessageClimate] = useState("")
	const [errorMessageTerrain, setErrorMessageTerrain] = useState("")

	const handleChange = e => {
		setCustom({
			...custom,
			[e.target.name]: e.target.value
		}); 
		
		if (!custom.name.trim(" ") || custom.name.length < 2 ) {
			seterrorMessageNamePerson(" Min 2 characters")
			setErrorMessage(" ")
		}  if(!custom.yearclimate.trim(" ")){
			setErrorMessageBirthYear(" Letters & numbers")
			setErrorMessage(" ")
		} 
		if(!custom.colorterrain.trim(" ")){
			setErrorMessageEyeColor(" Choose color")
			setErrorMessage(" ")
		} else {
			seterrorMessageNamePerson("")
			setErrorMessageBirthYear("")
			setErrorMessageEyeColor("")
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(custom.name.length < 2 || !(/(?=.*\d)(?=.*[a-zA-Z])/.test(custom.yearclimate)) || !custom.colorterrain.trim(" ")) {
			setErrorMessage(" Fill out all fields")
			seterrorMessageNamePerson(" Min 2 characters")
			setErrorMessageBirthYear(" Letters & numbers")
			setErrorMessageEyeColor(" Choose color")
		} 
		else {
			setErrorMessage(" Successfully added")
			addCustom({ ...custom, id: uuidv4()})
			setCustom({ ...custom, name: ""}, { ...custom, yearclimate: ""}, { ...custom, colorterrain: ""})
			setCustom({ id: "", name: "", yearclimate: "",  colorterrain: "", completed: false })
			seterrorMessageNamePerson("")
			setErrorMessageBirthYear("")
			setErrorMessageEyeColor("")
			setIsEyeColorTouched(false)
		}	
	}

	const handleChangePlanet = e => {
		setCustom({
			...custom,
			[e.target.name]: e.target.value
		}); 
		
		if (!custom.name.trim(" ")) {
			setErrorMessageNamePlanet(" Min 2 characters")
			setErrorMessage(" ")
		}  if(!custom.yearclimate.trim(" ")){
			setErrorMessageClimate(" Min 2 characters")
			setErrorMessage(" ")
		} 
		if(!custom.colorterrain.trim(" ")){
			setErrorMessageTerrain(" Min 2 characters")
			setErrorMessage(" ")
		} else {
			setErrorMessageNamePlanet("")
			setErrorMessageClimate("")
			setErrorMessageTerrain("")
		}
	}

	const handleSubmitPlanet = (e) => {
		e.preventDefault();
		if(custom.name.length < 2 || custom.yearclimate.length < 2 || custom.colorterrain.length < 2) {
			setErrorMessage(" Fill out all fields")
			setErrorMessageNamePlanet(" Min 2 characters")
			setErrorMessageClimate(" Min 2 characters")
			setErrorMessageTerrain(" Min 2 characters")
		} 
		else {
			setErrorMessage(" Successfully added")
			addCustom({ ...custom, id: uuidv4()})
			setCustom({ ...custom, name: ""}, { ...custom, yearclimate: ""}, { ...custom, colorterrain: ""})
			setCustom({ id: "", name: "", yearclimate: "",  colorterrain: "", completed: false })
			setErrorMessageNamePlanet("")
			setErrorMessageClimate("")
			setErrorMessageTerrain("")
			setIsEyeColorTouched(false)
		}	
	}

	return (
		<div>
		<FadeEffect show={show}>
		<div className="popUpModal">
		<br />

		<div>
		<div>
		<button className="addPersonPlanetButton" onClick={() => setShowForm("people")}>Person</button>
	  <button className="addPersonPlanetButton" onClick={() => setShowForm("planets")}>Planet</button>
		</div>
			
	  <br />
		<form className="addFavoriteForm" onSubmit={handleSubmit} style={
					showForm === "people" ? { display: " " } : { display: "none" }
				}>
		<p className="closeFormX"  onClick={() => setShow(show => !show)}>X</p>
			<div>
			<label>Name: </label> <span className='errorMessage' style={
						!custom.name.trim(" ") && isNameTouched && custom.name.length < 2 ? { display: "inline" } : { display: "none" }
						}>{errorMessageNamePerson}</span> 
			<br />
			<input type="text" name="name" value={custom.name} onChange={handleChange} onBlur={() => setIsNameTouched(true)}/> 
			</div>		
 
			<div>
			<label>Birth year: </label> <span className='errorMessage' style={
							!custom.yearclimate.trim(" ") && isBirthYearTouched && !(/(?=.*\d)(?=.*[a-zA-Z])/.test(custom.yearclimate)) ? { display: "inline" } : { display: "none" }
						}>{errorMessageBirthYear}</span> 
			<br />
			<input type="text" name="yearclimate" value={custom.yearclimate} onChange={handleChange} onBlur={() => setIsBirthYearTouched(true)}/>
			</div>	

			<div>
			<label>Eye color: </label> <span className='errorMessage' style={
							!custom.colorterrain.trim(" ") && isEyeColorTouched ? { display: "inline" } : { display: "none" }
						}>{errorMessageEyeColor}</span> 
			<br />
			<select name="colorterrain" value={custom.colorterrain} onChange={handleChange} onBlur={() => setIsEyeColorTouched(true)}>
				<option value=""></option>
				<option value="Black">Black</option>
				<option value="Blue">Blue</option>
				<option value="Blue-gray">Blue-gray</option>
				<option value="Brown">Brown</option>
				<option value="Gold">Gold</option>
				<option value="Gray">Gray</option>
				<option value="Green">Green</option>
				<option value="GreenYellow">Green, Yellow</option>
				<option value="Hazel">Hazel</option>
				<option value="Orange">Orange</option>
				<option value="Pink">Pink</option>
				<option value="Red">Red</option>
				<option value="RedBlue">Red, Blue</option>
				<option value="White">White</option>
				<option value="Yellow">Yellow</option>
				<option value="Unknown">Unknown</option>
			</select>	
			</div>
			<br/>


			<button type="submit" className="addFavoriteFormButton" >Add</button> &nbsp;
			<span className='errorMessage'>{errorMessage}</span>
		</form>

		<form className="addFavoriteForm" onSubmit={handleSubmitPlanet} style={
					showForm === "planets" ? { display: " " } : { display: "none" }
				}>
		<p className="closeFormX"  onClick={() => setShow(show => !show)}>X</p>
			<div>
			<label>Name: </label> <span className='errorMessage' style={
						!custom.name.trim(" ") && isNameTouched && custom.name.length < 2 ? { display: "inline" } : { display: "none" }
						}>{errorMessageNamePlanet}</span> 
			<br />
			<input type="text" name="name" value={custom.name} onChange={handleChangePlanet} onBlur={() => setIsNameTouched(true)}/> 
			</div>		
 
			<div>
			<label>Climate: </label> <span className='errorMessage' style={
							!custom.yearclimate.trim(" ") && isBirthYearTouched && custom.yearclimate.length < 2 ? { display: "inline" } : { display: "none" }
						}>{errorMessageClimate}</span> 
			<br />
			<input type="text" name="yearclimate" value={custom.yearclimate} onChange={handleChangePlanet} onBlur={() => setIsBirthYearTouched(true)}/>
			</div>	

			<div>
			<label>Terrain: </label> <span className='errorMessage' style={
							!custom.colorterrain.trim(" ") && isEyeColorTouched && custom.colorterrain.length < 2 ? { display: "inline" } : { display: "none" }
						}>{errorMessageTerrain}</span> 
			<br />
			<input type="text" name="colorterrain" value={custom.colorterrain} onChange={handleChangePlanet} onBlur={() => setIsEyeColorTouched(true)}/>	
			</div>
			<br/>
			<button type="submit" className="addFavoriteFormButton" >Add</button> &nbsp;
			<span className='errorMessage'>{errorMessage}</span>
		</form>

		</div>
		
		</div>
</FadeEffect> 
		<button className="addCustomButtonYodaCustom" onClick={() => setShow(show => !show)}> add custom</button>
		</div>
	)
}

export default AddFavoriteForm;