import React, {useState} from 'react'

function RecipeDetails({usedIngredientCount,usedIngredients, missedIngredientCount, missedIngredients}) {
    const [inCart, setInCart] = useState(false);
    const [showDetails, setShowDetails] = useState(false)

    function handleCart() {
        setInCart((inCart) => inCart = !inCart);
      }

      //show Recipe details onClick
      const handleDetailsOnClick = () => {
        setShowDetails((showDetails) => showDetails = !showDetails )
      }
  return (
    <>
    <button onClick={handleDetailsOnClick}>Ingredients</button>
    {showDetails ?
    <>
    <p>Ingredients: Have {usedIngredientCount} Missing: {missedIngredientCount}</p>
        <ul>{usedIngredients.map((usedIngredient) => (
          <ul key={usedIngredient.id}>{usedIngredient.name}
          </ul>))}{missedIngredients.map((missedIngredient) => (
          <ul>
            <span>{missedIngredient.name}</span>
            <button className="add" onClick={handleCart}>{inCart ? "Remove From Cart" : "Add To Cart"}</button>
          </ul>
        ))}</ul>
    </>
    : null
    }
    </>
  )
}

export default RecipeDetails