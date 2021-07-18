import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiply } from './actions';


function App() {
  const counter = useSelector(state => state.counterReducer);
  const loggedIn = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter {counter} </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input onChange={(e) => dispatch(multiply(e.target.value))}></input>

      <h1>{`Logged in: ${loggedIn}`}</h1>
    </div>
  );
}

export default App;
