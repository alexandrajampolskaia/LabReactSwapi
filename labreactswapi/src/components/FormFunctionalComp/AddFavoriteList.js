import React from "react";
import Person from "./Person";

function AddFavoriteList({ customMade, removeCustom }) {
  return (
    <div>
      <div>
        {customMade.map((custom) => (
          <Person key={custom.id} custom={custom} removeCustom={removeCustom}/>
        ))}
      </div>
    </div>
  );
}

export default AddFavoriteList;
