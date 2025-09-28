import React, { useState } from "react";
import "./Flashcard.css";

function Flashcard({ front, back, difficulty }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(!flipped);

  return (
    <div 
      className={`flashcard ${flipped ? "flipped" : ""} ${difficulty}`} 
      onClick={handleClick}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <p>{front}</p>
        </div>
        <div className="flashcard-back">
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
}


export default Flashcard;
