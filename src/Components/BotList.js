// src/Components/BotList.js
import React from "react";
import BotCard from "./BotCard";

function BotList({ bots, onAddToFavourites }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onAddToFavourites={onAddToFavourites} />
      ))}
    </div>
  );
}

export default BotList;
