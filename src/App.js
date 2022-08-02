import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home';
import Favorites from './components/Favorites'
import ShoppingList from './components/ShoppingList';
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
