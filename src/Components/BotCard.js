import React from "react";
import { useParams } from "react-router-dom";

const BotCard = ({ botList }) => {
  const { id } = useParams();
  const selectedBot = botList.find((bot) => bot.id === parseInt(id));

  if (!selectedBot) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{botList.name}</h2>
      <p>Health: {selectedBot.health}</p>
      <p>Damage: {selectedBot.damage}</p>
      <p>Armor: {selectedBot.armor}</p>
      <p>Bot Class: {selectedBot.bot_class}</p>
      <p>Catchphrase: {selectedBot.catchphrase}</p>
    </div>
  );
};

export default BotCard;
