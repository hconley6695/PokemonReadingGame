// Javascript Entry Point
import React, {Component} from 'react';
import { render } from 'react-dom';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import pokemonList from './pokemonList';
// import $ from 'jquery';

import Home from './home';
// import Dashboard from './dashboard';
// import StartBoard from './startboard';
// import BeginnerWords from './beginnerwords';
// import AdvancedWords from './advancedwords';
// import Winner from './winner';

// console.log(pokemonList);

// render((
// <Router history={hashHistory}>
//     <Route path="/" component={Home}/>


// </Router>
// 	), document.querySelector('.app'));

    // <Route path="/dashboard" component={Dashboard}>
    // 	<IndexRoute component={StartBoard}/>
    // 	<Route path="/beginner" component={BeginnerWords}/>
    // 	<Route path="/advanced" component={AdvancedWords}/>
    // 	<Route path="/winner" component={Winner}/>    
    // </Route>

let renderHome = () => {
	render (
		<Home/>,
		document.querySelector('.app')
	);
}
renderHome();