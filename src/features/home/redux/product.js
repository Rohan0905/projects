// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  LOAD_PRODUCT, UPDATE_PRODUCT,
} from './constants';

export function loadProduct(products) {
  return {
    type: LOAD_PRODUCT,
    data:products
  };
}

export function updateProduct(products) {
  return {
    type: UPDATE_PRODUCT,
    data:products
  };
}


export function reducer(state, action) {
  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        productList:action.data
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        productList:action.data
      };

    default:
      return state;
  }
}
