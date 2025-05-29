import React, { useState } from "react";
import places from "./data";
import "./App.css";

function App() {
  const [myPlan, setMyPlan] = useState([]);

  const addToPlan = (place) => {
    if (!myPlan.find((p) => p.id === place.id)) {
      setMyPlan([...myPlan, place]);
    }
  };

  const removeFromPlan = (id) => {
    setMyPlan(myPlan.filter((p) => p.id !== id));
  };

  return (
    <div className="container">
      <h1> Varanasi Tourism Guide</h1>

      <div className="card-grid">
        {places.map((place) => (
          <div className="card" key={place.id}>
            <img src={place.image} alt={place.name} />
            <div className="card-content">
              <h2>{place.name}</h2>
              <p>{place.description}</p>
              <button onClick={() => addToPlan(place)} className="plan-btn">
                ➕ Add to My Tour Plan
              </button>
            </div>
          </div>
        ))}
      </div>

      {myPlan.length > 0 && (
        <div className="tour-plan">
          <h2> My Tour Plan</h2>
          <ul>
            {myPlan.map((place) => (
              <li key={place.id}>
                {place.name}
                <button onClick={() => removeFromPlan(place.id)}>❌</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;


