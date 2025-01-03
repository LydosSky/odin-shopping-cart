import { Outlet, useNavigate } from 'react-router';
import Navbar from './components/Navbar.jsx';
import { useEffect, useState } from 'react';
import fetcher from './utils/fetcher.jsx';
import categs from './utils/categories.js';

const URL = 'https://fakestoreapi.com/products';

export default function App() {
  const navigation = useNavigate();
  const [categories, setCategories] = useState(categs);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState();
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    rating: '',
    sorting: '',
  });

  useEffect(function () {
    fetcher(`${URL}/categories`)
      .then((response) => setCategories(response))
      .catch((error) => console.error(error));
  }, []);

  useEffect(function () {
    fetcher(`${URL}`)
      .then((response) => setProducts(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navbar cart={cart} />
      <div className="container mx-auto h-5/6">
        {categories.length > 0 && (
          <Outlet
            context={{
              filters,
              categories,
              products,
              setFilters,
              cart,
              setCart,
              navigation,
            }}
          />
        )}
      </div>
    </div>
  );
}
