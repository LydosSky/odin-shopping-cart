import { useOutletContext, useParams } from 'react-router-dom';
import Card from '../components/Card';

export default function Shop() {
  const { name } = useParams();
  const { products } = useOutletContext();

  return (
    <>
      <div className="container grid grid-cols-3 gap-1">
        {products.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
