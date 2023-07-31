// src/Components/BotSpecs.js
import React from 'react';

function BotSpecs({ bot, onEnlist, onBack }) {
  const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p>Catchphrase: {catchphrase}</p>
      <button onClick={onEnlist}>Enlist</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default BotSpecs;
