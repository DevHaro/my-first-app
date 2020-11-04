import React, { Component } from 'react'

const KODERS_JSON = [
	{
		name: 'Axel',
		age: '31',
		hobbies: ['Videogames', 'Drink every day', 'pets']
	},
	{
		name: 'Iván',
		age: '29',
		hobbies: ['Basketball', 'Chess', 'Videogames']
	},
	{
		name: 'Luis',
		age: '34',
		hobbies: ['Money money', 'pets', 'Facebook','Trip','Baseball']
	},
]

class Koders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			koders: []
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				koders: KODERS_JSON,
			});
		}, 1000);
	}

	_renderKoders() {
		return this.state.koders.map(({ name, age, hobbies}) => {
			return (
				<li>{name}, {age} años
					<ul>
						 {hobbies.map((hobbie) => (
				 				<li>{hobbie}</li>
						 	))}
					</ul>										
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<ul>{this._renderKoders()}</ul>
			</div>
		)
	}
}

export default Koders;