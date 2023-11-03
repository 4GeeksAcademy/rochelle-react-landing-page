import React from 'react';
import './card.css';

const Card = ({ title, text, imageUrl }) => {
    return (
      <div className="card">
          <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer">
            <button className="btn-primary">Find out more!</button>
        </div>
      </div>
    );
  };

  export default Card;