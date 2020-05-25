import React, { Component } from "react";
import Input from './Input'

class TodoClassComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
	  birth_year: "",
	  eye_color: "",
      list: [],
    };
  }

  updateInput(key, nameValue, birthYearValue, eyeColorValue) {
    //update react state
    this.setState({
      [key]: nameValue,
	  [key]: birthYearValue,
	  [key]: eyeColorValue
    });
  }

  addItem = (e) => {
    //create item with unique id
    const person = {
      id: 1 + Math.random(),
      nameValue: this.state.name.slice(),
	  birthYearValue: this.state.birth_year.slice(),
	  eyeColorValue: this.state.eye_color.slice()
    };

    //copy of current list items
    const list = [...this.state.list];

    //add new item to list
    list.push(person);

    //update state with new list and reset newItem
    this.setState({
      list,
      name: "",
	  birth_year: "",
	  eye_color: "",
	//   nameError: "",
	//   birth_yearError: "",
	//   eye_colorError: "",
    });
	e.preventDefault();
	localStorage.setItem("person", JSON.stringify(list))	
  };


  componentDidMount() {
	localStorage.getItem("person") && this.setState({
		list: JSON.parse(localStorage.getItem("person"))
	})	
  }

  deleteItem(id) {
    //copy of current list items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter((item) => item.id !== id);

	this.setState({ list: updatedList });
	
	list.pop(id);
	localStorage.setItem('person',JSON.stringify(list));
  }

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeBirthYear = (e) => {
    this.setState({
      birth_year: e.target.value,
    });
  };

  handleChangeEyeColor = (e) => {
    this.setState({
      eye_color: e.target.value,
    });
  };

  isValid() {
	  if(this.state.name.trim(" ") === ""){
		  return false;
	  }
	  if(this.state.birth_year.trim(" ") === ""){
		return false;
	}
	if(this.state.eye_color.trim(" ") === ""){
		return false;
	}
	  return true;
  }



  render() {
    return (
      <div>
        <form className="addFavoriteForm">
          <div>
            <label>Name:</label><br/> 
            <Input
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </div>

          <div>
            <label>Birth year:</label><br/>
            <Input
              type="text"
              value={this.state.birth_year}
              onChange={this.handleChangeBirthYear}
            />
          </div>

		  <div>
            <label>Eye color::</label><br/>
            <Input
              type="text"
              value={this.state.eye_color}
              onChange={this.handleChangeEyeColor}
			  errorMessage={this.isValid() ? " " : "All fields required"}
            />
          </div>

			<br />
          <button className="addFavoriteButton" disabled={!this.isValid()} onClick={this.addItem}>Add</button>
        </form>

        <div>
          {this.state.list.map((item) => {
            return (
              <div className="eachCategoryCustomAdd" key={item.id}>
                <p>Name: {item.nameValue} </p>
                <p>Birth year: {item.birthYearValue} </p>
				<p>Eye color: {item.eyeColorValue} </p>
				<p className="customAddedTag">Custom</p>
                <button
                  className="deleteFavoriteButton"
                  onClick={() => this.deleteItem(item.id)}
                >
                  Delete
                </button>
			
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TodoClassComp;
