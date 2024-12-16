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
    <div className="container my-10 border flex justify-evenly">
      <div className="flex p-4  m-3">
        <input
          className="p-1 text-gray-700 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
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
          value={filters[key]}
          options={dropdowns[key]}
          handleChange={handleChange}
        />
      ))}
      <div className="flex items-center">
        <button className="p-1 bg-gray-300 text-white font-semibold rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
          Clear Filter
        </button>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  filters: PropTypes.object,
  setFilters: PropTypes.func,
};
