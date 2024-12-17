import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ cart }) {
  return (
    <>
      <nav className="text-2xl bg-gray-100">
        <div className="p-2 container flex items-center justify-between mx-auto">
          <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
          </div>
          <div className="h-fit relative flex justify-center items-center">
            <Link to="checkout">Cart</Link>
            <p className="absolute top-[-1rem] right-[-1.5rem] inline-flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full border-2 border-white -translate-x-2 translate-y-2">
              {cart.reduce((prev, curr) => (prev += curr.quantity), 0)}
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  cart: PropTypes.array,
};
