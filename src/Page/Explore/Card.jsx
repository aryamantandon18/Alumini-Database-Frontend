import React from 'react';
import './Card.css';

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="para">
          <p className="card-description">{description}</p>
        </div>
        <div className="btn">
          <button className="view-more">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
