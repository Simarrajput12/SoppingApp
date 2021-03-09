import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actions-types';

const initialState = {
  cart: [],
  cartRefreshing: 'fetching'
}
export default function (state = initialState, action) {
  let updatedCart;
  let updatedItemIndex;

  switch (action.type) {

    case ADD_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };

        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: updatedCart };

    case REMOVE_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );

      updatedCart.splice(updatedItemIndex, 1);

      return {
        ...state,
        cart: updatedCart,
      };

    default:
      return state
  }
}