import React from 'react';
import AddBtn from './AddBtn';
import RemoveBtn from './RemoveBtn';

export default ({ product, addToCart, cartItem, removeFromCart }) => {
  return (
    <div className="product-list-item">
      <h3>{ product.name }</h3>
      <img 
        height={100}
        title={product.name}
        src={`/products/${product.image}`}
        alt={product.name}
      />
      <div>{product.description}</div>
      <div>${product.price}</div>
      <div>
        <AddBtn 
          cartItem={cartItem} 
          product={product} 
          addToCart={addToCart}
        />
        {
          cartItem ?
          <RemoveBtn
            cartItem={cartItem} 
            removeFromCart={removeFromCart}
          /> : 
          null
        }
        
      </div>  
    </div>
  );
}