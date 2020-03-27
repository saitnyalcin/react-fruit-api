import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import HttpComponent from './HttpComponent';
import logo from './images/fresh-fruit-logo.png';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/http://www.fruityvice.com/api/fruit/all'
      )
      .then(result => setData(result.data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/* setting the flex box container */}
      <div className="container">
        {data.map(item => (
          <div key={item.id}>
            <HttpComponent
              name={item.name}
              carbohydrates={item.nutritions.carbohydrates}
              protein={item.nutritions.protein}
              fat={item.nutritions.fat}
              calories={item.nutritions.calories}
              sugar={item.nutritions.sugar}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
