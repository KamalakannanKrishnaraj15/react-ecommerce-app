const INITIAL_STATE = {
  products: [],
};

const setProducts = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'set-products': {
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};

export default setProducts;