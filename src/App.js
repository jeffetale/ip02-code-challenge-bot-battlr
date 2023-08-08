import React, { useState, useEffect } from "react";
import BotList from "./Components/BotList";
import BotFavourite from "./Components/BotFavourite";
import BotSpecs from "./Components/BotSpecs";
import { Container, Row, Col, Card } from "react-bootstrap";

function App() {
  const [bots, setBots] = useState([]);
  const [favouriteBots, setFavouriteBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

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

  function handleSelectBot(bot) {
    setSelectedBot(bot);
  }

  function handleBack() {
    setSelectedBot(null);
  }

  return (
    <Container>
      <Row>
        <Col md={8}>
          {selectedBot ? (
            <BotSpecs
              bot={selectedBot}
              onEnlist={() => handleAddToFavourites(selectedBot)}
              onBack={handleBack}
            />
          ) : (
            <>
           
              <Card className="mb-4">
                <BotList
                  bots={bots}
                  onSelect={handleSelectBot}
                  onAddToFavourites={handleAddToFavourites}
                />
              </Card>
              
              <Card>
                <BotFavourite
                  favouriteBots={favouriteBots}
                  onRemoveFromFavourites={handleRemoveFromFavourites}
                />
              </Card>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}
export default App;
