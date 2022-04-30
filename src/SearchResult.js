import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import "./SearchResult.css";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchresult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchresult_icon" />
      <div className="searchresult_info">
        <div className="searchresult_top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_______</p>
          <p>{description}</p>
        </div>
        <div className="searchresult_bottom">
          <div className="searchresult_star">
            <StarIcon className="searchresult_icon2" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchresult_price">
            <h3>{price}</h3>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
