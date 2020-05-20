import React from "react";
import Todo from "./Todo";

function AddFavoriteList({ todos, removeTodo }) {
  return (
    <div>
      <div>
        {todos.map((todo) => (
          <Todo className="todoComp" key={todo.id} todo={todo} removeTodo={removeTodo}/>
        ))}
      </div>
    </div>
  );
}

export default AddFavoriteList;
