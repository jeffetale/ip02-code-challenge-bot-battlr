import React, { useState } from "react";

const BotFavourite = () => {
  const [favouriteBots, setFavouritebots] = useState([]);

  const addToFavourites = (bot) => {
    setFavouritebots([...favouriteBots, bot]);
  };

  const removeBotFromFavouties = (botId) => {
    setFavouritebots(favouriteBots.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {favouriteBots.map((bot) => (
          <li key={bot.id}>
            {bot.name}
            <button onClick={() => removeBotFromFavouties(bot.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotFavourite;
