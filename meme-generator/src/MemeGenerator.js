import React from 'react';
import './style.css';

class MemeGenerator extends React.Component{
	constructor() {
		super();
		this.state ={
			topText: "",
			bottomText: "",
			randomMeme: "http://i.imgflip.com/1bij.jpg",
			allImages: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleClick(event) {
		event.preventDefault();
		const random = Math.floor(Math.random() * this.state.allImages.length);
		const randomMeme = this.state.allImages[random].url;
		this.setState({
			randomMeme: randomMeme
		});
	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(response => {
				const {memes} = response.data;
				this.setState({
					allImages: memes
				})
			})
	}

	render() {
		return (
			<div>
				<div className="meme-text">
					<input 
						type="text"
						placeholder="TopText goes here"
						value={this.state.topText}
						name="topText"
						onChange={this.handleChange}
					/>
					<input 
						type="text"
						placeholder="BottomText goes here"
						value={this.state.bottomText}
						name="bottomText"
						onChange={this.handleChange}
					/>
					<button onClick={this.handleClick}>Generate</button>
				</div>
				<div className="meme">
					<img src={this.state.randomMeme}/>
					<p className="top">{this.state.topText}</p>
					<p className="bottom">{this.state.bottomText}</p>
				</div>
			</div>
		)
	}
}

export default MemeGenerator;