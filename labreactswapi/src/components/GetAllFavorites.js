import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AddFavoriteForm from "./FormFunctionalComp/AddFavoriteForm";
import AddFavoriteList from "./FormFunctionalComp/AddFavoriteList";
import { useDispatch } from "react-redux";
import { actions } from "../features/people";

const lskey = "custom";

const GetAllFavorites = () => {
  const data = useSelector((state) => state.people);
  const dispatch = useDispatch();

  const addedFromSwapiandCustom = data.map((item) => (
    <div className="headersAndCategoriesFave" key={item.person.name}>
	<div className="eachCategoryInFaves">
      <p>{item.person.name} </p>
      <p>{item.person.birth_year} {item.person.climate}</p> 
      <p>{item.person.eye_color} {item.person.terrain}</p>
      <p className="AddedTag">From swapi</p> 
      <button
        className="deleteFavoriteButton"
        onClick={() => dispatch(actions.removeFromCart(item.person.name))}
      >
        ✕
      </button> </div> 
    </div> 
  ));

  const [customMade, setCustomMade] = useState([]);

  useEffect(() => {
    const storageCustom = JSON.parse(localStorage.getItem(lskey));
    if (storageCustom) {
		setCustomMade(storageCustom);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(lskey, JSON.stringify(customMade));
  }, [customMade]);

  function addCustom(custom) {
    setCustomMade([custom, ...customMade]);
  }

  function removeCustom(id) {
    setCustomMade(customMade.filter((custom) => custom.id !== id));
  }

  return (
    <div>
      <br />
      <AddFavoriteForm addCustom={addCustom} />
	  <br />
	  <p className="headerFavorites"> Favorites </p>
	  <p className="headersLine" />
      <span>{addedFromSwapiandCustom}</span>
      <AddFavoriteList customMade={customMade} removeCustom={removeCustom} />
      <br />
    </div>
  );
};

export default GetAllFavorites;
