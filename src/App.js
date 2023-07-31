// src/App.js
import React, { useState, useEffect } from "react";
import BotList from "./Components/BotList";
import BotFavourite from "./Components/BotFavourite";

function App() {
  const [bots, setBots] = useState([]);
  const [favouriteBots, setFavouriteBots] = useState([]);

  useEffect(() => {
    fetch("https://trendsserver.onrender.com/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  function handleAddToFavourites(bot) {
    if (!favouriteBots.find((favBot) => favBot.id === bot.id)) {
      setFavouriteBots([...favouriteBots, bot]);
    }
  }

  function handleRemoveFromFavourites(bot) {
    setFavouriteBots(favouriteBots.filter((favBot) => favBot.id !== bot.id));
  }

  return (
    <div>
      <BotFavourite
        favouriteBots={favouriteBots}
        onRemoveFromFavourites={handleRemoveFromFavourites}
      />
      <BotList bots={bots} onAddToFavourites={handleAddToFavourites} />
    </div>
  );
}

export default App;
