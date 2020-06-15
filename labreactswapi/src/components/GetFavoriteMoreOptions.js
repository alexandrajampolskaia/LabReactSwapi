import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AddFavoriteForm from "./FormFunctionalComp/AddFavoriteForm";
import AddFavoriteList from "./FormFunctionalComp/AddFavoriteList";
import { useDispatch } from "react-redux";
import { actions } from "../features/people";
import YodaCat from "./YodaCat"

const lskey = "custom";

const GetFavoriteMoreOptions = () => {
  const data = useSelector((state) => state.people);
  const dispatch = useDispatch();
  const [show, setShow] = useState("people")


      const addedFromSwapi = data.map((item) => {

	if (!item.person.climate) {
		return <div className="headersAndCategoriesFave" key={item.person.name}>
		<div className="eachCategoryInFaves" style={
					show === "people" ? { display: " " } : { display: "none" }
				}>
		  <p>{item.person.name} </p>
		  <p>{item.person.birth_year}</p> 
		  <p>{item.person.eye_color}</p>
		  <p className="AddedTag">From swapi</p> 
		  <button
			className="deleteFavoriteButton"
			onClick={() => dispatch(actions.removeFromCart(item.person.name))}
		  >
			✕
		  </button> </div> 
		</div> 
	} else {
		return <div className="headersAndCategoriesFave" key={item.person.name}>
		 <div className="eachCategoryInFaves" style={
					show === "planets" ? { display: " " } : { display: "none" }
				}>
		  <p>{item.person.name} </p>
		  <p>{item.person.climate}</p> 
		  <p>{item.person.terrain}</p>
		  <p className="AddedTag">From swapi</p> 
		  <button
			className="deleteFavoriteButton"
			onClick={() => dispatch(actions.removeFromCart(item.person.name))}
		  >
			✕
		  </button> </div> 
		</div> 
	} 


  });

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
	  <div className="deleteFavoriteButtonDiv" >
	  <button className="addCustomButton" onClick={() => setShow("people")}>Show people</button>
	  <button className="addCustomButton" onClick={() => setShow("planets")}>Show planets</button>
	  <button className="addCustomButton" onClick={() => setShow("custom")}>Show custom</button>
	  <AddFavoriteForm addCustom={addCustom} />
	  <YodaCat />
	  </div>
	  <br />
	  <p className="headerFavorites"> Favorites </p>
	  <p className="headersLine" />
	  <br />
      <span>{addedFromSwapi}</span>
	  <div style={
					show === "custom" ? { display: " " } : { display: "none" }
				}>
					<AddFavoriteList customMade={customMade} removeCustom={removeCustom} />
				</div>
      
      <br />
	  
    </div>
  );
};

export default GetFavoriteMoreOptions;
