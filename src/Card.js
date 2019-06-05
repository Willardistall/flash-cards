import React from "react";
// import { Table, } from "semantic-ui-react";
import Drawcard from "./DrawCard";

const Card = (props) => (
  <div className="Card Container">
    <div className="card">
      <div className="front">
        <div className="term">{props.term}</div>
        </div>
        <div className="back"> 
          <div className="definition"> {props.definition}</div>
      </div>
    </div>
  </div>
)

export default Card 