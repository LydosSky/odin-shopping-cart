import PropTypes from 'prop-types';

export default function Select({ name, options, handleChange, value }) {
  return (
    <div className="flex items-center">
      <select
        className="p-1 text-gray-700 font-semibold rounded focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        value={value}
        name={name}
        onChange={handleChange}
      >
        {options.map((o) => (
          <option
            className="focus:bg-gray-700"
            key={crypto.randomUUID()}
            value={o.value}
          >
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
  value: PropTypes.string,
};
