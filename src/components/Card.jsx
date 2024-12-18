import { useState } from 'react';
import validateInput from '../utils/validateInput';
import Button from './Button';
import PropTypes from 'prop-types';

export default function Card({ product, setCart, cart }) {
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
    let updateItem;
    const index = cart.reduce(
      (p, c, i) => (c.title === product.title ? i : p),
      -1,
    );

    if (!(index < 0)) {
      updateItem = cart.splice(index, 1)[0];
      updateItem.quantity += quantity;
    }

    setCart([
      ...cart,
      updateItem !== undefined ? updateItem : { quantity, ...product },
    ]);
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
      <div className="container flex flex-col gap-3">
        <div className="container flex flex-col gap-3 text-center">
          <p>$ {product.price}</p>
          <p>{product.title}</p>
          <p>
            Rating {product.rating.rate}, by {product.rating.count} people
          </p>
          <p></p>
        </div>

        <div className="container flex gap-4 justify-center">
          <Button
            extraStyle="px-2"
            innerText={'-'}
            clickHandler={handleQuantity}
          />
          <input
            onChange={handleQuantity}
            className="w-6 p-1 text-center font-bold"
            name=""
            type="text"
            value={quantity}
          />

          <Button
            extraStyle="px-2"
            innerText={'+'}
            clickHandler={handleQuantity}
          />
        </div>
        <div className="container flex justify-center">
          <Button innerText={'Add to Cart'} clickHandler={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object,
  setCart: PropTypes.func,
  cart: PropTypes.array,
};
