import React from 'react';
import FavoritesDetails from './FavoritesDetails';

const FavoritesCard = ({recipe, removeFromFavoritesList}) => {
    const {id, title, image, usedIngredientCount,usedIngredients, missedIngredientCount, missedIngredients, addToShoppingList } = recipe


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
                <h3>{title}</h3>
                <img src={image} alt={title}/>
                <button onClick={handleDelete}>X</button>
                <ul className="recipeDetails">
                    <FavoritesDetails
                    key={id}
                    usedIngredientCount={usedIngredientCount}
                    usedIngredients={usedIngredients}
                    missedIngredientCount={missedIngredientCount}
                    missedIngredients={missedIngredients}
                    addToShoppingList={addToShoppingList}
                    />
                </ul>

            </ul>
        </div>
    );
}

export default FavoritesCard;
