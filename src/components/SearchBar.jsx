import PropTypes from 'prop-types';
import { string } from 'prop-types';
import { useState } from 'react';
import Select from './Select';
import dropdowns from '../utils/dropdowns';

export default function SearchBar({ search, setSearch }) {
  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="container my-10 border p-3 flex justify-evenly">
      <div className="flex">
        <input
          placeholder="Search"
          name=""
          type="text"
          value={search}
          onChange={handleChange}
        />
      </div>
      {Object.keys(dropdowns).map((key) => (
        <Select
          name={key}
          firstOption={dropdowns[key][0].text}
          options={dropdowns[key]}
        />
      ))}
    </div>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
