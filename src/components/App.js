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

   // remove items from shopping list
  function removeFromShoppingList(id) {
    setShoppingList(shoppingList => shoppingList.filter((shoppingListItem) => shoppingListItem.id != id))
  }

  useEffect(() => {
    console.log(shoppingList)
  }, [shoppingList])

  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/favorites"
        render ={() => {
          return (
          <FavoritesContainer
            favoritesList={favoritesList}
            removeFromFavoritesList={removeFromFavoritesList}
            addToShoppingList={addToShoppingList}
            removeFromShoppingList={removeFromShoppingList}
          />
          )
        }}
      >
        </Route>
        <Route exact path="/"
        render ={() => {
          return (
          <Home
            addToFavoritesList={addToFavoritesList}
            removeFromFavoritesList={removeFromFavoritesList}
            addToShoppingList={addToShoppingList}
            removeFromShoppingList={removeFromShoppingList}
          />
          )
        }}
        >
      </Route>
        <Route exact path="/shoppinglist"
         render ={() => {
          return (
        <ShoppingListContainer
            shoppingList={shoppingList}
        />
          )
         }}
        >
        </Route>
      </Switch>
    </div>
  );
}

export default App;
