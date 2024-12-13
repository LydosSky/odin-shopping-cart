import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="text-2xl flex items-center justify-between p-2 bg-gray-100">
                <div className="flex gap-4">
                    <Link to="/">Home</Link>
                    <Link to="shop">Shop</Link>
                </div>
                <div className="flex justify-center items-center">
                    <Link to="checkout">Cart</Link>
                </div>
            </nav>
        </>
    );
}
