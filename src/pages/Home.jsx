import { Link, useOutletContext } from 'react-router-dom';

export default function Home() {
    const context = useOutletContext();
    return (
        <section className="h-5/6">
            <div className="h-2/4 p-8 flex items-center justify-center">
                <h1 className="text-6xl text-center">The Shop</h1>
            </div>
            <div className="grid grid-cols-2 gap-1">
                {context.categories.map((c) => (
                    <Link key={crypto.randomUUID()} to="shop">
                        <div className="transition uppercase rounded bg-black bg-opacity-50 text-white p-4 flex items-center justify-center h-64 hover:shadow-xl hover:drop-shadow-xl">
                            {c}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
