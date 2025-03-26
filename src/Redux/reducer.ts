import { buttonsReducer } from 'ducks/Buttons/reducer';
import { cartReducer } from 'ducks/Cart/reducer';
import { inputsReducer } from 'ducks/Inputs/reducer';

export const reducer = {
  buttons: buttonsReducer,
  inputs: inputsReducer,
  cart: cartReducer,
};
