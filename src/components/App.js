import '../App.css';
import NavBar from './NavBar'
import Home from './Home';
import Favorites from './Favorites'
import ShoppingList from './ShoppingList';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path ="/" element ={<Home />} />
        <Route exact path ="/favorites" element ={<Favorites />} />
        <Route exact path ="/shoppinglist" element ={<ShoppingList/>} />
      </Routes>
    </div>
  );
}

export default App;
