import React from "react";
const MovieCard = ({ title, subtitle, description, image, rating }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <div className="movie-details">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <p>Rating:{rating}</p>
      </div>
    </div>
  );
};
export default MovieCard;
