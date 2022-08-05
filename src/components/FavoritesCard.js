import React from 'react';
import FavoritesDetails from './FavoritesDetails';

const FavoritesCard = ({recipe, removeFromFavoritesList, removeFromShoppingList, addToShoppingList}) => {
    const {id, title, image, usedIngredientCount,usedIngredients, missedIngredientCount, missedIngredients } = recipe

  const handleDelete = () =>{

    fetch(`http://localhost:6001/favorites/${id}`, {
        method: "DELETE"
    })
    .then(resp =>resp.json())
    .then(removeFromFavoritesList(id))
  }

    return (
        <div>
            <ul className="card">
            <button onClick={handleDelete}>Delete</button>
              <h3>{title}</h3>
              <img src={image} alt={title}/>
              <ul className="recipeDetails">
                  <FavoritesDetails
                  key={id}
                  recipe={recipe}
                  usedIngredientCount={usedIngredientCount}
                  usedIngredients={usedIngredients}
                  missedIngredientCount={missedIngredientCount}
                  missedIngredients={missedIngredients}
                  addToShoppingList={addToShoppingList}
                  removeFromShoppingList={removeFromShoppingList}
                  />
              </ul>
            </ul>
        </div>
    );
}

export default FavoritesCard;
