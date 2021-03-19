import React from 'react';
import AddItems from './AddItems';
import Cart from './Cart';
import Shipping from './Shipping';
import Total from './Total';

import {atom, selector, useRecoilState, DefaultValue, useResetRecoilState} from 'recoil';


const tempFahrenheit = atom({
  key: 'tempFahrenheit',
  default: 32,
});

const tempCelcius = selector({
  key: 'tempCelcius',
  get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,
  set: ({set}, newValue) =>
    set(
      tempFahrenheit,
      newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32
    ),
});


function TempCelcius() {
  const [tempF, setTempF] = useRecoilState(tempFahrenheit);
  const [tempC, setTempC] = useRecoilState(tempCelcius);
  const resetTemp = useResetRecoilState(tempCelcius);

  const addTenCelcius = () => setTempC(tempC + 10);
  const addTenFahrenheit = () => setTempF(tempF + 10);
  const reset = () => resetTemp();

  return (
    <div>
      Temp (Celcius): {tempC}
      <br />
      Temp (Fahrenheit): {tempF}
      <br />
      <button onClick={addTenCelcius}>Add 10 Celcius</button>
      <br />
      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function App() {

  return (
    <div>
      <TempCelcius/>
      <h2>Available Items</h2>
      <AddItems/>
      <h2>Cart</h2>
      <Cart/>
      <h2>Shipping</h2>
      <Shipping/>
      <h2>Total</h2>
      <Total/>
  </div>
  );
}

export default App;


