import React from 'react';

import { useRecoilValue } from 'recoil';
import { cartState, inventoryState } from './atoms';

const Cart = () => {
  const cart = useRecoilValue(cartState);
  const inventory = useRecoilValue(inventoryState);

  if (Object.keys(cart).length === 0) return <p>No items.</p>;

  return (
    <ul>
      {Object.entries(cart).map(([id, quantity]) => (
        <li key={id}>
          {inventory[id].name} x {quantity}
        </li>
      ))}
    </ul>
  );
}

export default Cart;