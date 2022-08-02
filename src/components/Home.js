import React, {useState, useEffect} from 'react'
import Form from './Form'
import RecipesContainer from './RecipesContainer';
import recipesData from '../data/db.json';


const Home = ({apiKey}) => {

  const [searchWords, setSearchWords] = useState("");
  // const [recipes, setRecipes] = useState([])

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

  //   fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=apples,+flour,+sugar&number=2`)
  // }, [searchWords]);

  return (
    <div>
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
