import React from 'react';
import { connect } from 'react-redux';

const sort = (items) => {
  return items.sort((a, b) => a.id < b.id);
}

const Cart = ({ cart, addToCart, removeFromCart, removeAllFromCart }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          sort(cart).map(item => (
            <tr key={item.name}>
              <td>{ item.name }</td>
              <td>{ item.quantity }</td>
              <td>
                <button
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>
              </td>
              <td>
                <button
                  onClick={() => removeAllFromCart(item)}
                >
                  Remove all from cart
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => {
    dispatch({ type: 'ADD', payload: item })
  },
  removeFromCart: (item) => {
    dispatch({ type: 'REMOVE', payload: item })
  },
  removeAllFromCart: (item) => {
    dispatch({ type: 'REMOVE_ALL', payload: item })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);