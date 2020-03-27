import React from 'react';
import FruitPic from './widgets/FruitPic';

const HttpComponent = ({
  name,
  carbohydrates,
  protein,
  fat,
  calories,
  sugar
}) => {
  return (
    // the content of the flex divs
    <div className="flex-container">
      <div>
        <FruitPic image={name} />
        <h1>{name}</h1>
        <h3>{carbohydrates}</h3>
        <h3>{protein}</h3>
        <h3>{fat}</h3>
        <h3>{calories}</h3>
        <h3>{sugar}</h3>
      </div>
    </div>
  );
};

export default HttpComponent;
