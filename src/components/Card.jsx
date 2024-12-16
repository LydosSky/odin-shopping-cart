import { useState } from 'react';
import validateInput from '../utils/validateInput';

export default function Card({ product }) {
  const [quantity, setQuantity] = useState(1);

  function handleQuantity(e) {
    // if (e.nativeEvent.inputType === 'deleteContentBackward')

    switch (e.target.innerText) {
      case '+':
        setQuantity((prev) => validateInput((prev += 1), 1, 10));
        return;
      case '-':
        setQuantity((prev) => validateInput((prev -= 1), 1, 10));
        return;
      default:
        setQuantity(() => validateInput(parseInt(e.target.value), 1, 10));
        return;
    }
  }

  function handleAddToCart() {
    console.log('Added to Cart');
  }

  return (
    <div className="container shadow-lg border rounded-md flex flex-col p-1">
      <div className="container w-full h-36 flex justify-center">
        <img
          className="w-full h-auto object-contain height-"
          alt=""
          src={product.image}
        />
      </div>
      <div className="container">
        <div className="container flex flex-col gap-3 text-center">
          <p>$ {product.price}</p>
          <p>{product.title}</p>
          <p>
            Rating {product.rating.rate}, by {product.rating.count} people
          </p>
          <p></p>
        </div>

        <div className="container flex gap-2 justify-center">
          <button
            onClick={handleQuantity}
            className="bg-stone-300 px-2 rounded font-medium hover:shadow-inner"
            type="button"
          >
            -
          </button>
          <input
            onChange={handleQuantity}
            className="w-6 p-1 text-center font-bold"
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
    </div>
  );
}
