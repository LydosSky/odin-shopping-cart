import PropTypes from 'prop-types';
import { string } from 'prop-types';
import { useState } from 'react';
import Select from './Select';
import dropdowns from '../utils/dropdowns';

export default function SearchBar({ filters, setFilters }) {
  function updateState(part, newState) {
    setFilters((prevState) => ({
      ...prevState,
      [part]: newState,
    }));
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    updateState(name, value);
  }

  return (
    <div className="container my-10 border p-3 flex justify-evenly">
      <div className="flex p-4  m-3">
        <input
          placeholder="Search"
          name="search"
          type="text"
          value={filters.search}
          onChange={handleChange}
        />
      </div>
      {Object.keys(dropdowns).map((key) => (
        <Select
          key={crypto.randomUUID()}
          name={key}
          firstOption={dropdowns[key][0].text}
          options={dropdowns[key]}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

SearchBar.propTypes = {
  filters: PropTypes.object,
  setFilters: PropTypes.func,
};
