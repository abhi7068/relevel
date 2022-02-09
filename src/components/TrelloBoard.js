import React, { useState } from "react";
import "../styles/styles.css";
import relevel from "../assets/relevel.jpeg";

const getRandomNumber = function (min, max) {
  let getRandom = Math.floor(Math.random() * max + min);
  return getRandom;
};

const MainCard = ({ cardId, onRemove }) => {
  return (
    <div>
      <div className="column">
        <div className="card">
          <h3>
            {" "}
            Ticket{" "}
            <button type="button" onClick={onRemove} className="button">
              {cardId}
            </button>
          </h3>
          <p>Card Already Added</p>
        </div>
      </div>
    </div>
  );
};

function TrelloBoard() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards((cards) => [
      ...cards,
      {
        number: getRandomNumber(0, 101),
      },
    ]);
  };

  const removeCard = (id) => {
    setCards((cards) => cards.filter((el) => el.number !== id));
  };

  return (
    <>
      <header className="header">
        <div className="wrapper">
          <div className="logo">
            <img src={relevel} alt="logo" />
          </div>
          <div className="header-text">Relevel Trello</div>
        </div>
      </header>
      <div className="parent-div">
        <div className="row">
          <div className="column">
            <div className="card">
              <h3>Ticket 1</h3>
              <p>
                <button type="button" onClick={addCard} className="button">
                  Please add a card here
                </button>
              </p>
            </div>
            <div className="card-container">
              {cards.map((cardNumber) => (
                <MainCard
                  cardId={cardNumber.number}
                  key={cardNumber.id}
                  onRemove={() => removeCard(cardNumber.number)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrelloBoard;
