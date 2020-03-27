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
        <h3>
          <span role="img" aria-label="carbohydrates">
            Carbohydrates (🍞) :
          </span>
          {carbohydrates}
        </h3>
        <h3>
          <span role="img" aria-label="protein">
            Protein (🥚) :
          </span>
          {protein}
        </h3>
        <h3>
          <span role="img" aria-label="fat">
            Fat (🍔) :
          </span>
          {fat}
        </h3>
        <h3>
          <span role="img" aria-label="calories">
            Calories (⏱) :
          </span>
          {calories}
        </h3>
        <h3>
          <span role="img" aria-label="sugar">
            Sugar (🍩) :
          </span>
          {sugar}
        </h3>
      </div>
    </div>
  );
};

export default HttpComponent;
