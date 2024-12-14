import { Outlet } from 'react-router';
import Navbar from './components/Navbar.jsx';
import { useEffect, useState } from 'react';
import fetcher from './utils/fetcher.jsx';
import categs from './utils/categories.js';
import prods from './utils/products.js';

const URL = 'https://fakestoreapi.com/products';

export default function App() {
  const [categories, setCategories] = useState(categs);
  const [products, setProducts] = useState(prods);
  // useEffect(function () {
  //     fetcher(`${URL}/categories`)
  //         .then((response) => setCategories(response))
  //         .catch((error) => console.error(error));
  // }, []);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="container mx-auto h-5/6">
        {categories.length > 0 && <Outlet context={{ categories, products }} />}
      </div>
    </div>
  );
}
