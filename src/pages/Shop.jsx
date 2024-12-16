import { useOutletContext, useParams } from 'react-router-dom';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

export default function Shop() {
  const { products, filters, setFilters } = useOutletContext();

  return (
    <>
      <SearchBar filters={filters} setFilters={setFilters} />
      <div className="container grid grid-cols-3 gap-10">
        {products.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
