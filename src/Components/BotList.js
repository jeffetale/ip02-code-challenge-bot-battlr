import React from "react";
import BotCard from "./BotCard";
import { Container, Row, Col } from "react-bootstrap";

function BotList({ bots, onAddToFavourites }) {
  return (
    <Container>
      <h2>Bot Collection</h2>
      <Row>
        {bots.map((bot) => (
          <Col md={4} className="mb-4">
            <BotCard key={bot.id} bot={bot} onAddToFavourites={onAddToFavourites} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BotList;
