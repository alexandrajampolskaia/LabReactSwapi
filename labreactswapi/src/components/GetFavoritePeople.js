import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AddFavoriteForm from "./FormFunctionalComp/AddFavoriteForm";
import AddFavoriteList from "./FormFunctionalComp/AddFavoriteList";
import { useDispatch } from "react-redux";
import { actions } from "../features/cart";

const lskey = "person";

const GetFavoritePeople = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const peoplepeople = data.map((item) => (
    <div className="eachCategoryInFaves" key={item.person.name}>
      <p>Name: {item.person.name} </p>
      <p>Birth year: {item.person.birth_year} </p>
      <p>Eye color: {item.person.eye_color}</p>
      <p className="customAddedTag">From SWAPI</p>
      <button
        className="deleteFavoriteButton"
        onClick={() => dispatch(actions.removeFromCart(item.person.name))}
      >
        Delete
      </button>
    </div>
  ));

  const [persons, setPerson] = useState([]);

  useEffect(() => {
    const storagePersons = JSON.parse(localStorage.getItem(lskey));
    if (storagePersons) {
      setPerson(storagePersons);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(lskey, JSON.stringify(persons));
  }, [persons]);

  function addPerson(person) {
    setPerson([person, ...persons]);
  }

  function removePerson(id) {
    setPerson(persons.filter((person) => person.id !== id));
  }

  return (
    <div>
      <br />
      <AddFavoriteForm addPerson={addPerson} />
      <br />
      <span>{peoplepeople}</span>
      <AddFavoriteList persons={persons} removePerson={removePerson} />
      <br />
    </div>
  );
};

export default GetFavoritePeople;
