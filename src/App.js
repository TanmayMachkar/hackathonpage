import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import SocialFollow from './SocialFollow';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return(
			<div className='tc'>
				<a rel="noreferrer" style={{textDecoration: 'none'}} href="https://cultcode.framer.website/" target="_blank">
					<h1 className='tc f1 pa2 ba bg-black pointer link dim'>Cult.Code</h1>
				</a>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots = {filteredRobots} />
			    <SocialFollow />
			</div>
		);
	}
}

export default App;