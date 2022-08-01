import React, { useState, useEffect } from 'react'
import Form from './Form'
import RecipesContainer from './RecipesContainer'; 
import recipesData from '../data/db.json';

const Home = () => {
  
  
  const [searchWords, setSearchWords] = useState(""); 
  //const [recipes, setRecipes] = useState([]); 

  const recipes = recipesData;

  function onSubmit(formData) { 
    const values = Object.values(formData);
    const valuesFiltered = values.filter((value) => value !== "");
    const valuesTrimmed = valuesFiltered.map((value) => value.trim()); 
    const valuesString = valuesTrimmed.join(",+");
    console.log(valuesString);
    setSearchWords(valuesString);
  }

  // useEffect(() => {
  //   fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${searchWords}&number=2`)
  //   .then(res => res.json())
  //   .then((data) => setRecipes(data))
  // }, [searchWords]);

  return (
    <div>Home
      <Form 
        onSubmit={onSubmit}
      />
      <RecipesContainer
        recipes={recipes}
      />
     </div>
  )
}

export default Home
