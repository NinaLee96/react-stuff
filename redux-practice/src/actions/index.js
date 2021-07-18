export const increment = () =>{
  return {
    type: 'INCREMENT'
  };
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const multiply = (num) => {
  return {
    type: 'MULTIPLY',
    payload: num
  }
}