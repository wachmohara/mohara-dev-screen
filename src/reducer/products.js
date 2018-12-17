import { Events } from '../constants';

const initialState = {
  fetched: false,
  productList: [],
  error: null
};

const products = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Events.PRODUCT_FETCH:
      return { ...state, fetched: true, productList: payload };
    default:
      return state;
  }
};

export default products;