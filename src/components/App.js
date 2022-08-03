import '../App.css';
import React, { useState } from "react";
import NavBar from './NavBar'
import Home from './Home';
import Favorites from './Favorites'
import ShoppingList from './ShoppingList';
import { Route, Switch } from 'react-router-dom';


function App() {

  const [favoritesList, setFavoritesList] = useState([]);
 
  function addToFavoritesList(recipe) {
    console.log("in app");
    if(!favoritesList.includes(recipe)) {
      setFavoritesList([...favoritesList, recipe])
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/favorites">
          <Favorites 
            favoritesList={favoritesList}
          />
        </Route>
        <Route exact path="/shoppinglist">
          <ShoppingList/>
        </Route>
        <Route exact path="/">
          <Home 
            addToFavoritesList={addToFavoritesList}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
