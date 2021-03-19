import React from 'react';
import { useRecoilState, useRecoilValue, selector } from 'recoil';
import { shippingState, destinationState } from './atoms';

// const getDestinations = selector({
//   key: 'getDestinations',
//   get: ({get}) => get(destinationState),
// })

const Shipping = () => {
  const [shipping, setShipping] = useRecoilState(shippingState);
  const destinations = useRecoilValue(destinationState);

  return (
    <ul>
      {Object.entries(destinations).map(([country, price]) => (
        <button onClick={ () => setShipping(country) }>
          {country} @ ${price} { country === shipping ? <span> clicked</span> : null}
        </button>
      ))}
    </ul>
  );
}

export default Shipping;