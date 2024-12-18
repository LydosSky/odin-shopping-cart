import { useOutletContext } from 'react-router-dom';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

export default function Shop() {
  const { products, filters, setFilters, setCart, cart } = useOutletContext();
  const { search, rating, category, sorting } = filters;
  function transformText(text) {
    return text.trim().toLowerCase();
  }

  function filteredBySearch(product) {
    if (search === '') return true;
    const title = transformText(product.title);
    const category = transformText(product.category);
    const description = transformText(product.description);
    const regex = new RegExp(transformText(search), 'i');
    return regex.test(title) || regex.test(description) || regex.test(category);
  }

  function filteredByCategory(product) {
    if (category === '') return true;
    const prodCategory = transformText(product.category);
    const regex = new RegExp(`\\b${transformText(category)}\\b`, 'i');
    return regex.test(prodCategory);
  }

  function filteredByRating(product) {
    if (rating === '') return true;
    return product.rating.rate >= parseInt(rating);
  }

  function sortProducts(product1, product2) {
    switch (sorting) {
      case 'price-ascending':
        return product1.price - product2.price;
      case 'price-descending':
        return product2.price - product1.price;
      case 'rating-ascending':
        return product1.rating.rate - product2.rating.rate;
      case 'rating-descending':
        return product2.rating.rate - product1.rating.rate;
      default:
        return 0;
    }
  }

  return (
    <>
      <SearchBar filters={filters} setFilters={setFilters} />
      <div className="container grid grid-cols-3 gap-10">
        {products
          .filter(filteredBySearch)
          .filter(filteredByCategory)
          .filter(filteredByRating)
          .slice()
          .sort(sortProducts)
          .map((p) => (
            <Card key={p.id} product={p} setCart={setCart} cart={cart} />
          ))}
      </div>
    </>
  );
}
