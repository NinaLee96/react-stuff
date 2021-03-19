import { atom } from 'recoil';

export const cartState = atom({
  key: "cartState",
  default: {},
});

export const shippingState = atom({
  key: "shippingState",
  default: "US",
});

export const inventoryState = atom({
  key: 'inventoryState',
  default: {
    a: { name: "🧉 Yerba Mate", price: 10 },
    b: { name: "☕️ Coffee", price: 15 },
    c: { name: "🍵 Tea", price: 7.5 },
  }
});

export const destinationState = atom({
  key: "destinationState",
  default: {
    US: 25,
    CA: 35,
    CO: 45,
  }
});

export const totalState = atom({
  key: 'totalState',
  default: 0,
});



