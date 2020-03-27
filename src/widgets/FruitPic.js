import React from 'react';
import Apple from '../fruit-images/apple.png';
import Default from '../fruit-images/question-mark.png';

const FruitPic = ({ image }) => {
  switch (image) {
    case 'Apple':
      image = Apple;
      break;

    default:
      image = Default;
      break;
  }

  return (
    <div className="fruit-image">
      <img src={image} alt="" />
    </div>
  );
};

export default FruitPic;
