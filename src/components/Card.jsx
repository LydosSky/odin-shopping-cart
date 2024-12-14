import { useState } from 'react';
import validateInput from '../utils/validateInput';

export default function Card({ product }) {
  const [quantity, setQuantity] = useState(1);
  console.log(product);

  function handleQuantity(e) {
    switch (e.target.innerText) {
      case '+':
        setQuantity((prev) => validateInput((prev += 1), 1, 10));
        return;
      case '-':
        setQuantity((prev) => validateInput((prev -= 1), 1, 10));
        return;
      default:
        setQuantity(() => validateInput(parseInt(e.target.value), 1, 10));
    }
  }

  function handleAddToCart() {
    console.log('Added to Cart');
  }

  return (
    <div className="container p-3 shadow-lg border rounded-md flex flex-col gap-2 justify-center items-center">
      <div className="container w-36 h-48 flex justify-center">
        <img
          className="w-full h-auto object-contain"
          alt=""
          src={product.image}
        />
      </div>
      <div className="container flex gap-2 justify-center">
        <button
          onClick={handleQuantity}
          className="bg-stone-300 px-2 rounded font-medium"
          type="button"
        >
          -
        </button>
        <input
          onChange={handleQuantity}
          className="w-5 text-center font-"
          name=""
          type="text"
          value={quantity}
        />
        <button
          onClick={handleQuantity}
          className="bg-stone-300 px-2 rounded font-medium"
          type="button"
        >
          +
        </button>
      </div>
      <div className="container flex justify-center">
        <button
          className="bg-stone-400 px-2 rounded font-medium text-white"
          onClick={handleAddToCart}
          type="button"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
