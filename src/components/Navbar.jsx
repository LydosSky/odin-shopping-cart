import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="text-2xl bg-gray-100">
        <div className="p-2 container flex items-center justify-between mx-auto">
          <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="shop">Shop</Link>
          </div>
          <div className="flex justify-center items-center">
            <Link to="checkout">Cart</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
