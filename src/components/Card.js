import React from "react";
// import pic1 from '../styles/Images/pic1.jpg';
import "../styles/Card.css";

function Card(props) {

  return (
    <div className="card" onClick={props.imageClick}>
      <div className="card-body">
      <img className="pics" alt={props.name} src={props.image} id={props.id}/>
      </div>
    </div>
  );
}


export default Card;
