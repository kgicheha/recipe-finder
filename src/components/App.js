import '../App.css';
import React, { useState, useEffect } from "react";
import NavBar from './NavBar'
import Home from './Home';
import FavoritesContainer from './FavoritesContainer'
import ShoppingListContainer from './ShoppingListContainer'
import { Route, Switch } from 'react-router-dom';

function App() {

  const [favoritesList, setFavoritesList] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);


  //add items to favorites list
  function addToFavoritesList(recipe) {
    if(!favoritesList.includes(recipe)) {
      setFavoritesList([...favoritesList, recipe])
    }
  }

  // remove items from favoritesList
  function removeFromFavoritesList(id) {
    setFavoritesList(favoritesList => favoritesList.filter((favoriteItem) => favoriteItem.id != id))
  }

   //add items to shopping list
  function addToShoppingList(recipe) {
      if (!shoppingList.includes(recipe)) {
      setShoppingList([...shoppingList, recipe])
    }
  }
  console.log(shoppingList)

   // remove items from shopping list
  function removeFromShoppingList(id) {
    setShoppingList(shoppingList => shoppingList.filter((shoppingListItem) => shoppingListItem.id != id))
  }

  return (
    <div className="App">
      <NavBar />
      {/* <img alt="fork" id="fork" src="./image.png"/> */}
      <Switch>
      <Route exact path="/favorites">
          <FavoritesContainer
            favoritesList={favoritesList}
            removeFromFavoritesList={removeFromFavoritesList}
            addToShoppingList={addToShoppingList}
          />
        </Route>
        <Route exact path="/">
          <Home
            addToFavoritesList={addToFavoritesList}
            removeFromFavoritesList={removeFromFavoritesList}
            addToShoppingList={addToShoppingList}
            removeFromShoppingList={removeFromShoppingList}
          />
      </Route>
        <Route exact path="/shoppinglist">
        <ShoppingListContainer
            shoppingList={shoppingList}
        />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
