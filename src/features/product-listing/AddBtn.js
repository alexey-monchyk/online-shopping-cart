import React from 'react';

export default ({ product, cartItem, addToCart }) => {
  return (
    <button
      onClick={() => addToCart(product)}
    >
      Add to cart ({
        (cartItem && cartItem.quantity) || 0
      })
    </button>
  )
}