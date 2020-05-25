import React from "react";
import Person from "./Person";

function AddFavoriteList({ persons, removePerson }) {
  return (
    <div>
      <div>
        {persons.map((person) => (
          <Person key={person.id} person={person} removePerson={removePerson}/>
        ))}
      </div>
    </div>
  );
}

export default AddFavoriteList;
