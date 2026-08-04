import React from 'react'

const Cart = ({cart}) => {
  if(cart.length === 0){
    return(
      <div>
        <h2>Shopping Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Shopping Cart</h2>

      <ul>
        {cart.map((item) => (
          <li key= {item.id}> 
            {item.name} is in your cart
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
