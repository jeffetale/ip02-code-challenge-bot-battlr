// src/Components/BotFavourite.js
import React from "react";
import BotCard from "./BotCard";

function BotFavourite({ favouriteBots, onRemoveFromFavourites }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {favouriteBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onRemoveFromFavourites={onRemoveFromFavourites}
        />
      ))}
    </div>
  );
}

export default BotFavourite;
