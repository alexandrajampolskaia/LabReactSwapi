import React, { useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
// import { Field, reduxForm } from 'redux-form'


function AddFavoriteForm({ addTodo }) {
	const [toggle, setToggle] = useState(true)
	const [todo, setTodo] = useState({ id: "", task: "", birth_year: "",  eye_color: "", completed: false });
	const [errors, setErrors] = useState({ });
	const [isSubmitting, setIsSubmitting] = useState(false);


	function validateForm(todo) {
		let errors = {}
		if (!todo.task){
			errors.task = "(Required)"
		} else if (todo.task.length < 5) {
			errors.task = "Please enter minimum 10 characters"
		}
		if (!todo.birth_year){
			errors.birth_year = "(Required)"
		} else if (todo.birth_year.length < 5) {
			errors.birth_year = "Must contain letters characters numbers"
		}
		if (!todo.eye_color){
			errors.eye_color = "(Required)"
		} else if (todo.eye_color.length < 5 ) {
			errors.eye_color = "Please choose a characters"
		}
		return errors;
	} 

	const handleChange = e => {
		setTodo({
			...todo,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		e.preventDefault();
		if(todo.eye_color) {
			addTodo({ ...todo, id: uuidv4()})
			setTodo({ ...todo, task: ""}, { ...todo, birth_year: ""}, { ...todo, eye_color: ""})
		}
			setErrors(validateForm(todo));
			setIsSubmitting(true);
		
	}

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {			
			handleSubmit();
		}
	}, [errors]);

	return (
		<div>
		{toggle &&
		<form className="addFavoriteForm" onSubmit={handleSubmit}>
		<p className="closeFormX" onClick={() => setToggle(toggle => !toggle)}>X</p>
			<div>
			<label>Name: </label> 
			{/* {errors.task && <span>{errors.task}</span>}  */}
			<br />
			<input type="text" name="task" value={todo.task} onChange={handleChange}/> 
			</div>		
 
			<div>
			<label>Birth year: </label> 
			{/* {errors.birth_year && <span>{errors.birth_year}</span>}  */}
			<br />
			<input type="text" name="birth_year" value={todo.birth_year} onChange={handleChange}/>
			</div>	

			<div>
			<label>Eye color: </label> 
			{/* {errors.eye_color && <span>{errors.eye_color}</span>}  */}
			<br />
			<input type="text" name="eye_color" value={todo.eye_color} onChange={handleChange}/>	
			</div>

			<br/>
			<button type="submit" className="addFavoriteButton" >Add</button>
		</form>

		}
		{/* onClick={() => { setToggle(toggle => !toggle); handleSubmit()}} */}
		</div>
	)
}

export default AddFavoriteForm;