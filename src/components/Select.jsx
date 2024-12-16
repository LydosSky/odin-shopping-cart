import PropTypes from 'prop-types';

export default function Select({ name, firstOption, options, handleChange }) {
  return (
    <div className="flex items-center">
      <select defaultValue={firstOption} name={name} onChange={handleChange}>
        {options.map((o) => (
          <option key={crypto.randomUUID()} value={o.value}>
            {o.text}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string,
  firstOption: PropTypes.string,
  options: PropTypes.array,
  handleChange: PropTypes.func,
};
