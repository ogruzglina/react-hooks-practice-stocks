import React from "react";

function SearchBar({ onChangeFilter, sortBy, onSort }) {
  function handleChange (e) {
    onChangeFilter(e.target.value);
  }

  function handleChangeRadioBtn (e) {
    onSort(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={ sortBy === "Alphabetically" }
          onChange={ handleChangeRadioBtn }
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={ sortBy === "Price" }
          onChange={ handleChangeRadioBtn }
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={ handleChange }>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
