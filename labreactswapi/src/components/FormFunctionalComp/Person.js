import React from "react";

function Person({ person, removePerson }) {

	function handleRemoveClick() {
		removePerson(person.id)
	}
	
  return (

    <div className="eachCategoryCustomAdd" >
      <p>Name: {person.name}</p>
	  <p>Birth year: {person.birth_year}</p>
	  <p>Eye color: {person.eye_color}</p>
	  <p>Custom added</p>

      <button className="deleteFavoriteButton" onClick={handleRemoveClick}>Delete</button>

    </div>

  );
}

export default Person;
