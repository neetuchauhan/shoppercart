
import {
  PRODUCT_LIST, USER_CART,
  SIZE_FILTER,CART_ADD,CART_REMOVE
} from './types';

export const productList = data => (dispatch) => {
  dispatch({
    type: PRODUCT_LIST,
    payload: data
  })
};
export const addtoCart = data => (dispatch) => {
      dispatch({
        type: USER_CART,
        payload: data
      })
};

export const fetchDashboardData = data => (dispatch) => {
 
        dispatch({
          type: SIZE_FILTER,
          payload: data
        });
    
};