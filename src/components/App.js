import '../App.css';
import NavBar from './NavBar'
import Home from './Home';
import Favorites from './Favorites'
import ShoppingList from './ShoppingList';
import { Route, Switch } from 'react-router-dom';
import { React, useState } from 'react'; 

function App() {

  const [shoppingList, setShoppingList] = useState([]);
  console.log("inside App")
  function addToShoppingList(item) {
    console.log(typeof item)
      if (!shoppingList.includes(item)) {
      setShoppingList([...shoppingList, item])
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/favorites">
          <Favorites  />
        </Route>
        <Route exact path="/shoppinglist">
          <ShoppingList shoppingList={shoppingList}/>
        </Route>
        <Route exact path="/">
          <Home addToShoppingList={addToShoppingList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
