import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    
    <div className="card">
      <span onClick={() => props.pickCard(props.id)} >
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </span>
    </div>
    
  );
}

export default CharacterCard;
