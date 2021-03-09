import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from '../actions/actions-types';
export const addToCart = (item) => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: item
  })
}
export const removeItem = (item) => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item
  })
}
export const updateCart = (item) => dispatch => {
  dispatch({
    type: UPDATE_CART,
    payload: item
  })
}