import { useOutletContext, useNavigate } from 'react-router-dom';
import CartCard from '../components/CartCard';
import Button from '../components/Button';

export default function Checkout() {
  const { cart, setCart, navigation } = useOutletContext();

  function clearCart() {
    setCart([]);
  }

  function finishShopping() {
    setCart([]);
    navigation('/shop');
  }

  return (
    <div className="container p-8">
      <div className="text-center flex flex-col gap-3 items-center">
        <Button
          extraStyle="w-64 bg-red-600"
          innerText="Clear Cart"
          clickHandler={clearCart}
        />

        <p className="text-center text-5xl">
          Total of Cart:{' '}
          <span className="text-green-600">
            {cart
              .reduce((prev, curr) => (prev += curr.quantity * curr.price), 0)
              .toFixed(2)}
          </span>
        </p>

        <Button
          extraStyle="text-4xl bg-green-600 w-64"
          innerText="Pay"
          clickHandler={finishShopping}
        />
      </div>

      {cart.length === 0 ? (
        <h2 className="text-6xl text-center font-medium mt-8">
          Your Cart is Empty
        </h2>
      ) : (
        <div className="py-8 h-full flex flex-col gap-3">
          {cart.map((cartItem) => (
            <CartCard key={crypto.randomUUID()} cartItem={cartItem} />
          ))}
        </div>
      )}
    </div>
  );
}
