import { createBrowserRouter } from 'react-router-dom';
import routes from './routes.jsx';
import { RouterProvider } from 'react-router';

const router = createBrowserRouter(routes);

export default function App() {
    return <RouterProvider router={router} />;
}
