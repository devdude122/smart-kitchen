import React from 'react';
import './App.scss';
import Nav from './components/nav/nav';
import Home from './views/home/home';
import { Route } from 'react-router-dom';
import NewRecipe from './views/newRecipe/newRecipe';
import RecipeCard from './components/recipeCard/recipeCard';
import ViewRecipe from './views/viewRecipe/viewRecipe';
import EditRecipe from './views/editRecipe/editRecipe';
import login from './views/login /login';

function App() {
	return (
		<div className="App">
			<Nav />
			<Route exact path="/" component={Home} />
			<Route exact path="/new" component={NewRecipe}/>
			<Route exact path="/recipes/:id" component={ViewRecipe}/>
			<Route exact path="/recipes/edit/:id" component={EditRecipe}/>
			<Route exact path="/login" component={login}/>
		</div>
	);
}

export default App;
