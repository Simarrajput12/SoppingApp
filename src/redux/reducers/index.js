
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import loginReducer from './loginReducer'
import productReducer from './productReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  products: productReducer,
  cart: cartReducer,

})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let composeEnhancers = compose;

  if (__DEV__) {
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  let store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
  );
  let persistor = persistStore(store)

  return { store, persistor }
}
