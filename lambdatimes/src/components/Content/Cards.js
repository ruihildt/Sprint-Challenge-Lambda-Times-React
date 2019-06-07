import React, { Component } from 'react';
import Card from './Card';
import pt from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
          {
              props.cards.map((card, index) =>
                <Card
                key={index}
                card={card}
                />
              )
            }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: pt.arrayOf(pt.object),
};

export default Cards;