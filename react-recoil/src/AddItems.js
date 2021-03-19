import React from 'react';
import { useRecoilState, useRecoilValue, selector } from 'recoil';
import { cartState, inventoryState } from './atoms';

// can use selector to manipulate the state

// const readInventory = selector({
//   key: 'readInventory',
//   get: ({get}) => get(inventoryAtom),
// });

const AddItems = () => {
  //useRecoilState manipulates state
  const [cart, setCart] = useRecoilState(cartState);
  //useRecoilValue reads state only
  const inventory = useRecoilValue(inventoryState);
  
  return (
    <div>
    {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}

    <ul>
        {Object.entries(inventory).map(([id, { name, price }]) => (
          <li key={id}>
            {name} @ ${price.toFixed(2)}
            <button
              onClick={() => {
                setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
              }}
            >
              add
            </button>
            {cart[id] && (
              <button
                onClick={() => {
                  const copy = { ...cart };
                  if (copy[id] === 1) {
                    delete copy[id];
                    setCart(copy);
                  } else {
                    setCart({ ...copy, [id]: copy[id] - 1 });
                  }
                }}
              >
                remove
              </button>
            )}
          </li>
        ))}
      </ul>
      </div>
  );
}

export default AddItems;