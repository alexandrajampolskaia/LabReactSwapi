import React from "react";

function Person({ custom, removeCustom }) {

	function handleRemoveClick() {
		removeCustom(custom.id)
	}
	
  return (

	<div className="headersAndCategoriesFave">
		 <div className="eachCategoryInFaves" >
      <p>{custom.name}</p>
	  <p>{custom.yearclimate}</p>
	  <p>{custom.colorterrain}</p>
	  <p className="AddedTag">Custom added</p>

      <button className="deleteFavoriteButton" onClick={handleRemoveClick}>✕</button>

    </div>
	</div>
  );
}

export default Person;
