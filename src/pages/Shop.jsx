import { useOutletContext, useParams } from 'react-router-dom';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

export default function Shop() {
  const { name } = useParams();
  const { products } = useOutletContext();
  const [search, setSearch] = useState('');

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="container grid grid-cols-3 gap-10">
        {products.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
