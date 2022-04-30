import React from "react";
import "./Cards.css";
import StarIcon from "@mui/icons-material/Star";

function Cards({ src, title, description, price, rating }) {
  return (
    <>
  
      <div className="card">
        <img src={src} alt="" />
        <div className="card_info">
          <div className="card_rating">
            <StarIcon />
            <p>{rating}</p>
          </div>
          <h3>{title}</h3>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>
      </div>
    </>
  );
}

export default Cards;
