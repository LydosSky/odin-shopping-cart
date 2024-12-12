import Home from './pages/Home';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';
import App from './App';

export default [
    {
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            { path: '/shop', element: <Shop /> },
        ],
    },
];
