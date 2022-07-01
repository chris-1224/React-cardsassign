import React, { useState } from "react";
import "../components/Card.css";
//import "./App.css";

function Card() {
  const [active, changeColor] = useState(true);

  function changeCard1Color() {
    changeColor((current) => !current);
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
        className={active ? "Card1-change" : "Card1"}
        onClick={changeCard1Color}
      >
        <h2> Card 2</h2>
        <p className={active ? "Card-p1" : "Card-p"}>
          Click here to see the change
        </p>
      </div>
    </div>
  );
}

export default Card;
