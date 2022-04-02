import "./card.css";
import React from "react";

function Card(props) {
  return (
    <div className="Card">
      <div className="Conteudo">{props.Children}</div>
      <div className="Footer">{props.titulo}</div>
    </div>
  );
}
export default Card;
