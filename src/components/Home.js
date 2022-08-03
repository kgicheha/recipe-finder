import React, {useState, useEffect} from 'react'
import Form from './Form'
import RecipesContainer from './RecipesContainer';
import recipesData from '../data/testing.json';


function Home({ addToFavoritesList }) {
  const apiKey = process.env.REACT_APP_API_KEY

  const [searchWords, setSearchWords] = useState("");
  // const [recipes, setRecipes] = useState([])

  const recipes = recipesData;

  function onSubmit(formData) {
    const values = Object.values(formData);
    const valuesFiltered = values.filter((value) => value !== "");
    const valuesTrimmed = valuesFiltered.map((value) => value.trim());
    const valuesString = valuesTrimmed.join(",+");
    setSearchWords(valuesString);
  }

  // useEffect(() => {

  //   fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=apples,+flour,+sugar&number=2`)
  // }, [searchWords]);

  return (
    <div>
      <Form
        onSubmit={onSubmit}
      />
      <RecipesContainer
        recipes={recipes} 
        addToFavoritesList={addToFavoritesList}
      />
     </div>
  )
}
export default Home
