import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogForm from "./HogForm";
import hogs from "../porkers_data";

function App() {
  const [hogList, setHogList] = useState(hogs);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");

  function handleHide(name) {
    setHogList((prev) => prev.filter((h) => h.name !== name));
  }

  function handleAddHog(newHog) {
    setHogList((prev) => [...prev, newHog]);
  }

  const filtered = greasedOnly
    ? hogList.filter((h) => h.greased)
    : hogList;

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "weight") return a.weight - b.weight;
    return 0;
  });

  return (
    <div className="App">
      <Nav />

      {/* Filter & Sort Controls */}
      <div style={{ padding: "1rem" }}>
        <label>
          <input
            type="checkbox"
            checked={greasedOnly}
            onChange={(e) => setGreasedOnly(e.target.checked)}
          />
          {" "}Greased Pigs Only?
        </label>

        <label htmlFor="sort" style={{ marginLeft: "1rem" }}>Sort by:</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      <HogForm onAddHog={handleAddHog} />
      <HogList hogs={sorted} onHide={handleHide} />
    </div>
  );
}

export default App;