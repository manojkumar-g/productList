import {createStore,applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './shared/reducers';
import thunkMiddleware from 'redux-thunk';
import {loadCartItems,saveCartItems} from './localStorage'


// here we are configuring the redux store using reducers and we are applying middlewares like thunk for async actions and loggerMiddleware
//debugging
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);


export default store;
