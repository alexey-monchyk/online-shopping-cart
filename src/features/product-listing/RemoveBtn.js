import React from 'react';

export default ({ removeFromCart, cartItem }) => {
  return (
    <button
      onClick={() => removeFromCart(cartItem)}
    >
      Remove from cart
    </button>
  );
}