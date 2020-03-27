import React from 'react';
import Apple from '../fruit-images/apple.png';
import Banana from '../fruit-images/banana.png';
import Cherry from '../fruit-images/cherry.png';
import Lemon from '../fruit-images/lemon.png';
import Mango from '../fruit-images/mango.png';
import Orange from '../fruit-images/orange.png';
import Pear from '../fruit-images/pear.png';
import Pineapple from '../fruit-images/pineapple.png';
import Default from '../fruit-images/question-mark.png';
import Raspberry from '../fruit-images/raspberry.png';
import Strawberry from '../fruit-images/strawberry.png';
import Tomato from '../fruit-images/tomato.png';
import Watermelon from '../fruit-images/watermelon.png';

const FruitPic = ({ image }) => {
  switch (image) {
    case 'Apple':
      image = Apple;
      break;
    case 'Banana':
      image = Banana;
      break;
    case 'Cherry':
      image = Cherry;
      break;
    case 'Lemon':
      image = Lemon;
      break;
    case 'Mango':
      image = Mango;
      break;
    case 'Orange':
      image = Orange;
      break;
    case 'Pear':
      image = Pear;
      break;
    case 'Pineapple':
      image = Pineapple;
      break;
    case 'Raspberry':
      image = Raspberry;
      break;
    case 'Strawberry':
      image = Strawberry;
      break;
    case 'Tomato':
      image = Tomato;
      break;
    case 'Watermelon':
      image = Watermelon;
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
