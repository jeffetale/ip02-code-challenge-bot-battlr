// src/Components/BotCard.js
import React from "react";
import { Card, Button } from "react-bootstrap";

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
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={avatar_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Health: {health}
          <br />
          Damage: {damage}
          <br />
          Armor: {armor}
          <br />
          Class: {bot_class}
          <br />
          Catchphrase: {catchphrase}
        </Card.Text>
        {onAddToFavourites && (
          <Button variant="primary" onClick={handleAddClick}>
            Enlist
          </Button>
        )}
        {onRemoveFromFavourites && (
          <>
            <Button variant="danger" onClick={handleRemoveClick}>
              Remove
            </Button>
            <Button
              variant="warning"
              onClick={() =>
                fetch(`https://trendsserver.onrender.com/bots/${id}`, {
                  method: "DELETE",
                })
              }
            >
              Discharge from collection
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default BotCard;
