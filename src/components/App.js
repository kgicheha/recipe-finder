import '../App.css';
import React, { useState, useEffect } from "react";
import NavBar from './NavBar'
import Home from './Home';
import FavoritesContainer from './FavoritesContainer'
import ShoppingList from './ShoppingList';
import { Route, Switch } from 'react-router-dom';

function App() {

  const [favoritesList, setFavoritesList] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    console.log(favoritesList);
  }, [favoritesList]);

  // useEffect(() => {
  //   console.log(shoppingList);
  // }, [shoppingList]);

  //add items to favorites list
  function addToFavoritesList(recipe) {
    if(!favoritesList.includes(recipe)) {
      setFavoritesList([...favoritesList, recipe])
    }
  }

  // remove items from favoritesList
  function removeFromFavoritesList(id) {
    setFavoritesList(favoritesList => favoritesList.filter((favoriteItem) => favoriteItem.id != id))
    console.log(id)
  }

  function addToShoppingList(item) {
      if (!shoppingList.includes(item)) {
      setShoppingList([...shoppingList, item])
    }
  }

  return (
    <div className="App">
      <NavBar />
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
            addToShoppingList={addToShoppingList}
            removeFromFavoritesList={removeFromFavoritesList}
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
