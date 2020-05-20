import React from "react";

function Todo({ todo, removeTodo }) {

	function handleRemoveClick() {
		removeTodo(todo.id)
	}
	
  return (

    <div className="eachCategoryCustomAdd" >
      <p>Name: {todo.task}</p>
	  <p>Birth year: {todo.birth_year}</p>
	  <p>Eye color: {todo.eye_color}</p>
	  <p>Custom added</p>

      <button className="addFavoriteButton" onClick={handleRemoveClick}>Delete</button>

    </div>

  );
}

export default Todo;
