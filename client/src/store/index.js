import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
const initialState = {
  user: null
};

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return null;
    default:
      return state;
  }
};

const initialProductsState = {
  products: []
};

const productsReducer = (state = initialProductsState.products, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
