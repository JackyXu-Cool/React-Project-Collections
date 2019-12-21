import React from 'react';
import TypingArea from './TypingArea';
import Todo from './Todo';
import TodoCreationForm from './TodoCreationForm'
import './style.css';

class Todolist extends React.Component {
	constructor() {
		super();
		this.state = {
			eventList: [],
			eventText: "",
			division: "Study",
			location: "",
			time: "",
			visibility: {'display': 'none'},
			imageSource: ["https://img.icons8.com/wired/30/000000/saving-book.png",
						  "https://img.icons8.com/metro/30/000000/sports-mode.png",
						  "https://img.icons8.com/metro/30/000000/business.png",
						  "https://img.icons8.com/metro/30/000000/airplane-landing.png"],
			src: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleClick() {
		this.setState({
			visibility: {"display": "block"}
		});
	}

	handleClose() {
		let newList = this.state.eventList;
		const item = {};
		item.location = this.state.location;
		item.time = this.state.time;
		item.eventText = this.state.eventText;
		item.division = this.state.division;
		newList.push(item);

		/** Clear the input text */
		document.getElementById("eventText").value="";
		document.getElementById("location").value="";
		document.getElementById("time").value="";

		/**Get the value of dropdown and set the correct picture source */
		const dropdownValue = this.state.division;
		let newSrc = "";
		if(dropdownValue === 'Study') {
			newSrc = this.state.imageSource[0];
		} else if(dropdownValue === 'Sports') {
			newSrc = this.state.imageSource[1];
		} else if(dropdownValue === 'Business') {
			newSrc = this.state.imageSource[2];
		} else if(dropdownValue === 'Travel') {
			newSrc = this.state.imageSource[3];
		}
		let currentSource = this.state.src;
		currentSource.push(newSrc);

		/** Set new state: change the CreationForm's display to none and add the newList */
		this.setState({
			visibility: {'display': 'none'},
			eventList: newList,
			location: "",
			time: "",
			eventText: "",
			src: currentSource
		});
	}

	handleDelete(index) {

		/** Remove the object in the eventlist that has the same index as the input index */
		const newList = this.state.eventList.filter((value,i) => {
			return i !== index
		});

		/** Remove the source string in the src list that has the same index as the input index */
		const newSource = this.state.src.filter((source,i) => {
			return i != index
		})
		
		this.setState({
			eventList: newList,
			src: newSource
		});
	}

	render() {
		return (
			<div>
				<TypingArea handleChange={this.handleChange} handleClick={this.handleClick}/>
				<TodoCreationForm visibility={this.state.visibility} 
								  onChange={this.handleChange} 
								  closeForm={this.handleClose}
								  division={this.state.division}
				/>
				{this.state.eventList.map((thing,index) => (
					<Todo event={thing}
						  deleteItem={() => this.handleDelete(index)}
						  src={this.state.src[index]}
					/>
				))}
			</div>
		)
	}
}

export default Todolist;

