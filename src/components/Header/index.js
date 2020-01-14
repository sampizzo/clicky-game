import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div>
      <h2>
        Score: {props.score} | Top Score: {props.topScore}
      </h2>
      <h3>{props.gameText}</h3>
      {/* <img alt={props.name} src={props.image} /> */}
    </div>
  );
}

export default Header;
