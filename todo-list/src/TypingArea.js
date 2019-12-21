import React from 'react';
import './style.css';

function TypingArea(props) {
	return (
		<div className="textPlace">
			<input type='text' 
				   placeholder="Enter here"
				   id="eventText"
				   name="eventText"
				   onChange= {props.handleChange}
			/>
			<a onClick={props.handleClick}>
			<img src="https://img.icons8.com/ios-filled/50/000000/add.png" width="40" height="40"/></a>
		</div>
	)
}
export default TypingArea;

