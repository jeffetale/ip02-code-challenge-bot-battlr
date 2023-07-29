import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const BotList = () => {
  const [botList, setBotList] = useState([]);

  useEffect(() => {
    fetch("https://trendsserver.onrender.com/bots")
      .then((r) => r.json())
      .then((data) => setBotList(data))
      .catch((error) => console.error("Error retrieving data", error));
  }, []);

  return (
    <>
      <h2>Bot Collection</h2>
      <ul>
        {botList.map((bot) => (
          <li key={bot.id}>
            <Link to={`/bots/${bot.id}`} exact>
              {bot.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
