import { FETCH_PRODUCTS } from '../actions/actions-types';
import { getProducts } from '../../data';
export const fetchProducts = () => dispatch => {
  const products = getProducts();
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products
  })
}