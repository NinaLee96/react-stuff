import React from 'react';

import { useRecoilValue, selector } from 'recoil';
import { cartState, destinationState, inventoryState, shippingState } from './atoms';

const totalState = selector({
  key: 'totalState', 
  get: ({get}) =>{
    // grab state from atoms
    const cart = get(cartState);
    const shipping = get(shippingState);
    const inventory = get(inventoryState);
    const destination = get(destinationState);

    // do something with state from atoms
    const subtotal = Object.entries(cart).reduce((acc, [id, quantity]) => acc + inventory[id].price * quantity, 0)
    const shippingTotal = destination[shipping]

    //return the object
    return {
      subtotal,
      shipping: shippingTotal, 
      total: subtotal + shippingTotal,
    }
  }
})

const Total = () => {
  //read value from object
  const total = useRecoilValue(totalState);

  return (
    <div>
      <p>Subtotal: ${total.subtotal.toFixed(2)}</p>
      <p>Shipping: ${total.shipping.toFixed(2)}</p>
      <p>Total: ${total.total.toFixed(2)}</p>
    </div>
   
  );
}

export default Total;