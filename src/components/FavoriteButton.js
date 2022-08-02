import React, {useState} from 'react'

function Favorites({favoriteRecipe}) {

    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavorite = () => {
        setIsFavorite((isFavorite) => isFavorite = !isFavorite)
        favoriteRecipe()
    }

  return (
    <>
        {isFavorite ? (
          <button onClick = {handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {handleFavorite} className="emoji-button favorite">☆</button>
        )}
    </>
  )
}

export default Favorites