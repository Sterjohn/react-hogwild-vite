import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onAddHog({
      name,
      weight: parseFloat(weight),
      specialty,
      greased,
      "highest medal achieved": "none",
      image: "https://via.placeholder.com/150",
    });
    setName("");
    setWeight("");
    setSpecialty("");
    setGreased(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <p>Add a New Hog</p>

      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="weight">Weight:</label>
      <input
        id="weight"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <label htmlFor="specialty">Specialty:</label>
      <input
        id="specialty"
        type="text"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      />

      <label htmlFor="greased">Greased?</label>
      <input
        id="greased"
        type="checkbox"
        checked={greased}
        onChange={(e) => setGreased(e.target.checked)}
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;