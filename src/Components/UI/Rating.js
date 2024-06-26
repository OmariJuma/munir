import "./Rating.css";
import ReactStars from "react-rating-stars-component";
import React from "react";
const Rating = (props) => {
  const ratingChanged = (newRating) => {
    // console.log(newRating);
  };
  return (
    <ReactStars
      value={3}
      count={5}
      onChange={ratingChanged}
      size={16}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="rgb(233, 125, 16)"
    />
  );
};
export default Rating;
