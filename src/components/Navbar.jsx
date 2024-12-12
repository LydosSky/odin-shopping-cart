import { Link } from 'react-router-dom';

export default function Navbar({ state }) {
    console.log(state);
    return (
        <>
            <nav className="">
                <Link to="/">Home</Link>
                <Link to="shop">Shop</Link>
            </nav>
        </>
    );
}
