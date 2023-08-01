import React, { useState, useEffect } from 'react';
import BotList from './Components/BotList';
import BotFavourite from './Components/BotFavourite';
import BotSpecs from './Components/BotSpecs';

function App() {
  const [bots, setBots] = useState([]);
  const [favouriteBots, setFavouriteBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch('https://trendsserver.onrender.com/bots')
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

  function handleSelectBot(bot) {
    setSelectedBot(bot);
  }

  function handleBack() {
    setSelectedBot(null);
  }

  return (
    <div>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} onEnlist={() => handleAddToFavourites(selectedBot)} onBack={handleBack} />
      ) : (
        <BotList bots={bots} onSelect={handleSelectBot} />
      )}
      <BotFavourite favouriteBots={favouriteBots} onRemoveFromFavourites={handleRemoveFromFavourites} />
    </div>
  );
}

export default App;