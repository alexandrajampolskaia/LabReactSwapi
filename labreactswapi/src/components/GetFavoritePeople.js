import React, { useState, useEffect }  from 'react';
import { useSelector } from 'react-redux';
// import AddFavoriteForm from './AddFavoriteForm';
// import AddFavoriteList from './AddFavoriteList';
import { useDispatch } from 'react-redux'
import { actions } from '../features/cart'
import TodoClassComp from './TodoClassComp'


// const data = [
// 	{
// 		person: { name: "Luke Skywalker", birth_year: "19BBY", eye_color: "blue" },
// 	}
// ]

// const LOCAL_STORAGE_KEY = "react-todo-list-todos"

const GetFavoritePeople = () => {
	const data = useSelector(state => state.cart)
	const dispatch = useDispatch();

	const peoplepeople = data.map(item => (
		<div className="eachCategoryInFaves" key={item.person.name}>
			<p>Name: {item.person.name} </p>
			<p>Birth year: {item.person.birth_year} </p>
			<p>Eye color: {item.person.eye_color}</p>
			<p className="customAddedTag">From SWAPI</p>
			<button className="deleteFavoriteButton" onClick={() => dispatch(actions.removeFromCart(item.person.name))}>Delete</button>
		</div>
	))


	// const [todos, setTodos] = useState([])

	// useEffect(() => {
	// 	const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
	// 	if (storageTodos) {
	// 		setTodos(storageTodos)
	// 	}
	// }, [])

	// useEffect(() => {
	// 	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
	// }, [todos])


	// function addTodo(todo) {
	// 	setTodos([todo, ...todos])
	// }

	// function removeTodo(id) {
	// 	setTodos(todos.filter(todo => todo.id !== id))
	// }

	// const [toggled, toggle] = useState(false)

	return (
		<div>
			<br/>
		
		
		
		{/* <AddFavoriteForm addTodo={addTodo}/> <br /> */}
		<span><TodoClassComp /></span> <span>{peoplepeople}</span>
		{/* <AddFavoriteList todos={todos} removeTodo={removeTodo} /> */}
		<br />


		{/* <button className="toggleFormButton" onClick={() => toggle(toggled => !toggled)}>Add a custom</button>

		<div className="inputFieldsForm">{toggled && <AddFavoriteForm addTodo={addTodo}/> }</div> */}
		
		
		</div>
	)

}


export default GetFavoritePeople;