//import '../App.css';
import React, { useState } from "react";
import NavBar from './NavBar'
import Home from './Home';
import Favorites from './Favorites'
import ShoppingList from './ShoppingList';
import { Route, Switch } from 'react-router-dom';

function App() {

  const [favoritesList, setFavoritesList] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  
  function addToFavoritesList(recipe) {
    if(!favoritesList.includes(recipe)) {
      setFavoritesList([...favoritesList, recipe])
    } 
  }

  function addToShoppingList(item) {
      if (!shoppingList.includes(item)) {
      setShoppingList([...shoppingList, item])
    }
  }

  return (
    <div className="App">
      <NavBar />
      {/* <img alt="fork" id="fork" src="./image.png"/> */}
      <Switch>
      <Route exact path="/favorites">
          <Favorites 
            favoritesList={favoritesList}
          />
        </Route>
        <Route exact path="/">
          <Home 
            addToFavoritesList={addToFavoritesList}
            addToShoppingList={addToShoppingList}
          />
        </Route>
        <Route exact path="/shoppinglist">
          <ShoppingList 
            shoppingList={shoppingList}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
