import { useOutletContext, useParams } from 'react-router-dom';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

export default function Shop() {
  const { products, filters, setFilters } = useOutletContext();

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

  return (
    <>
      <SearchBar filters={filters} setFilters={setFilters} />
      <div className="container grid grid-cols-3 gap-10">
        {products
          .filter(filteredBySearch)
          .filter(filteredByCategory)
          .map((p) => (
            <Card key={p.id} product={p} />
          ))}
      </div>
    </>
  );
}
