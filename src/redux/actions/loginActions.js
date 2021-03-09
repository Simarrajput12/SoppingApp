import { LOGIN, LOGOUT } from '../actions/actions-types';

export const login = (data) => dispatch => {
  dispatch({
    type: LOGIN,
    payload: data
  })

}

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
    payload: ''
  })

}