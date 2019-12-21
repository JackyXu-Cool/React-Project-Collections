import React from 'react';
import './style.css'

function Todo(props) {
	return (
		<div className="todo-item">
			<img src={props.src} width="35"/>
			<div className="event-info">
				<h4>{props.event.division}</h4>
	        	<p><b>{props.event.eventText}</b></p>
        		<p>{props.event.location}</p>
        		<p>{props.event.time}</p>
        	</div>
        	<a onClick={props.deleteItem}><img src="https://img.icons8.com/pastel-glyph/64/000000/minus.png"/></a>
    	</div>
	);
}

export default Todo;

