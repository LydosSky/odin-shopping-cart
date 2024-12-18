import PropTypes from 'prop-types';

export default function CartCard({ cartItem }) {
  return (
    <h1>
      <div className="p-3 w-full mx-auto bg-white border-2 border-gray-300 rounded-lg shadow-md flex ">
        <img className="w-48" alt="" src={cartItem.image} />
        <div className="container flex flex-col gap-4 p-3">
          <p>{cartItem.title}</p>
          <p>
            {cartItem.rating.rate} by {cartItem.rating.count}
          </p>
          <p>{cartItem.price}</p>
          <p>{cartItem.description}</p>
          <h2 className="font-bold text-red-600">
            <span className="text-bold text-2xl">{cartItem.quantity}</span> Item
            on Cart
          </h2>
        </div>
      </div>
    </h1>
  );
}

CartCard.propTypes = {
  cartItem: PropTypes.object,
};
