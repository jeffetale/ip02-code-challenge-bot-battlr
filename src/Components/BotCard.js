// src/Components/BotCard.js
import React from "react";

function BotCard({ bot, onAddToFavourites, onRemoveFromFavourites }) {
  const {
    id,
    name,
    health,
    damage,
    armor,
    bot_class,
    catchphrase,
    avatar_url,
  } = bot;

  function handleAddClick() {
    if (onAddToFavourites) {
      onAddToFavourites(bot);
    }
  }

  function handleRemoveClick() {
    if (onRemoveFromFavourites) {
      onRemoveFromFavourites(bot);
    }
  }

  return (
    <div>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p>Catchphrase: {catchphrase}</p>
      {onAddToFavourites && <button onClick={handleAddClick}>Enlist</button>}
      {onRemoveFromFavourites && (
        <>
          <button onClick={handleRemoveClick}>Remove</button>
          <button
            onClick={() =>
              fetch(`https://trendsserver.onrender.com/bots/${id}`, {
                method: "DELETE",
              })
            }
          >
            Discharge from collection
          </button>
        </>
      )}
    </div>
  );
}

export default BotCard;
