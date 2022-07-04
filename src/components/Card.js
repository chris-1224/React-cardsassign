import React, { useState } from "react";
import "../components/Card.css";
//import "./App.css";

function Card() {
  const [isActive, changeColor] = useState(true);

  function changeCard1Color() {
    changeColor((current) => !current);
  }

  const [active, changeColor1] = useState(true);

  function changeCard2Color() {
    changeColor1((current) => !current);
  }

  return (
    <div className="Container">
      <div
        className={active ? "Card1" : "Card1-change"}
        onClick={changeCard1Color}
      >
        <h2> Card 1</h2>
        <p className={active ? "Card-p" : "Card-p1"}>
          Click here to see the change
        </p>
      </div>

      <div
        className={isActive ? "Card1-change" : "Card1"}
        onClick={changeCard2Color}
      >
        <h2> Card 2</h2>
        <p className={isActive ? "Card-p1" : "Card-p"}>
          Click here to see the change
        </p>
      </div>
    </div>
  );
}

export default Card;
