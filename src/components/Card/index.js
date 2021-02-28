import React from 'react';
import test from '../../assets/burger.jpg';
import './card.css';

function Card () {
  return(

    <div className="card">
      <img src={test} className="card-img-top"/>
      <div className="card-img-overlay">
        <h2>Project Title</h2>
        <p>
            Technology used
        </p>
        <button type="button" className="btn btn-primary btn-project" data-toggle="modal" data-target="#modalMatlab">
            Learn more
        </button>
      </div>
    </div>

  )
}

export default Card;