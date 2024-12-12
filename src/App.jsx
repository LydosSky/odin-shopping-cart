import { Outlet, RouterProvider } from 'react-router';
import Navbar from './components/Navbar.jsx';
import { useState } from 'react';

export default function App() {
    const [state, setState] = useState('hello');
    return (
        <>
            <Navbar state={state} />
            <Outlet />
        </>
    );
}
