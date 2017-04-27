import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="main-img-wrapper">
					<img src="./images/pikachu.png"/>
				</div>

				<div className="game-name-wrapper">
					<h1>Pokemon Match</h1>
					<p>Match the word to the correct Pokemon!</p>
				</div>


			</div>

		)
	}
}

				// <div className="level-buttons">
				// 	<Link to="/beginner"className="beg-level-btn home-btn">Beginner</Link>
				// 	<Link to="/advanced" className="adv-level-btn home-btn">Advanced</Link>

				// </div>