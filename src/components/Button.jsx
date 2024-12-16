import PropTypes from 'prop-types';

export default function Button({ extraStyle, innerText, clickHandler }) {
  return (
    <button
      onClick={clickHandler}
      type="button"
      className={`p-1 bg-gray-300 text-white font-semibold rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 ${extraStyle}`}
    >
      {innerText}
    </button>
  );
}

Button.propTypes = {
  extraStyle: PropTypes.string,
  innerText: PropTypes.string,
  clickHandler: PropTypes.func,
};
