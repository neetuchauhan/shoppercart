import {
  PRODUCT_LIST,
  USER_CART,
  SIZE_FILTER,
  CART_ADD,
  CART_REMOVE,

} from '../actions/types';

const initialState = {
  user_cart: [],
  userDetails: {},
  orgDetails: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LIST:
      return {
        ...state,
        product_list: action.payload,
      };
    case USER_CART:
      return {
        ...state,
        user_cart: action.payload,
      };
    case SIZE_FILTER:
      return {
        ...state,
        size_filter: action.payload,
      };
    case CART_ADD:
      return {
        ...state,
        cart_add: action.payload,
      };
    case CART_REMOVE:
      return {
        ...state,
        cart_remove: action.payload,
      };

    default:
      return state;
  }
}
