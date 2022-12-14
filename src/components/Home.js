import React, {useState, useEffect} from 'react'
import Form from './Form'
import RecipesContainer from './RecipesContainer';
// import recipesData from '../data/testing.json';

function Home({ addToFavoritesList, addToShoppingList, removeFromFavoritesList, removeFromShoppingList }) {
  const apiKey = process.env.REACT_APP_API_KEY
  const [searchWords, setSearchWords] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // const recipes = recipesData;


  function onSubmit(formData) {
    const values = Object.values(formData);
    const valuesFiltered = values.filter((value) => value !== "");
    const valuesTrimmed = valuesFiltered.map((value) => value.trim());
    const valuesString = valuesTrimmed.join(",+");
    setSearchWords(valuesString);
  }

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${searchWords}&number=30`) 
    .then(res => res.json()) 
    .then(data => {
      // console.log(data)
      setRecipes(data)
    })
    }, [searchWords]);

  return (
    <div> 
      <Form
        onSubmit={onSubmit}
      /> 
      <img alt="blurb" id="blurb" src="./Fork it.gif" />
      <RecipesContainer
        recipes={recipes}
        addToFavoritesList={addToFavoritesList}
        addToShoppingList={addToShoppingList}
        removeFromFavoritesList={removeFromFavoritesList}
        removeFromShoppingList={removeFromShoppingList}
      />
     </div>
  )
}

export default Home
