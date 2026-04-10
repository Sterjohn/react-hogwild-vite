import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      aria-label="hog card"
      className="ui card"
      style={{ cursor: "pointer" }}
    >
      <div className="content" onClick={() => setShowDetails(!showDetails)}>
        <h3>{hog.name}</h3>
        <img
          src={hog.image}
          alt={"Photo of " + hog.name}
          style={{ width: "100%" }}
        />
        {showDetails && (
          <div>
            <p>Specialty: {hog.specialty}</p>
            <p>{hog.weight}</p>
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>
            <p>{hog["highest medal achieved"]}</p>
          </div>
        )}
      </div>
      <button onClick={() => onHide(hog.name)}>Hide Me</button>
    </div>
  );
}

export default HogCard;