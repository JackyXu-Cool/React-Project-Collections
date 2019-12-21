import React from 'react';

class TodoCreationForm extends React.Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event) => {
		this.props.onChange(event);
	}

	render() {
		return (
			<div style={this.props.visibility} class="todoModal">
				<div class="info">
					<select id="division" name="division" 
							value={this.props.division} onChange={this.handleChange}>
						<option value="Study" >Study</option>
						<option value="Sports" >Sports</option>
						<option value="Business" >Business</option>
						<option value="Travel" >Travel</option>
					</select>
				</div>
				<div class="info">
					<img src="https://img.icons8.com/material/64/000000/worldwide-location.png" width='20'/>
					<input type='text' 
						   placeholder="Where"
						   id="location"
						   name="location"
						   onChange={this.handleChange}
					/>
				</div>
				<div class="info">
					<img src="https://img.icons8.com/pastel-glyph/64/000000/time.png" width='20'/>
					<input type="text" 
						   placeholder="Time"
						   id="time"
						   name="time"
						   onChange={this.handleChange}
					/>
				</div>
				<a onClick={this.props.closeForm}>
				<img src="https://img.icons8.com/ios/64/000000/circled-right-2.png" width="30"/></a>
			</div>
		)
	}
}

export default TodoCreationForm;