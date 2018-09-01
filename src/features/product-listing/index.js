import React from 'react';
import { connect } from 'react-redux';

import ProductListItem from './ProductListItem';

const ProductListing = (props) => (
  <div className="product-listing">
    {
      props.products.map(product => (
        <ProductListItem 
          key={product.name} 
          product={product}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
        />
      ))
    }
  </div>
); 

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => {
    dispatch({ type: 'ADD', payload: item })
  },
  removeFromCart: (item) => {
    dispatch({ type: 'REMOVE', payload: item })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);