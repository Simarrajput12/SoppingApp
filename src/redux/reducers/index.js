
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import productReducer from './productReducer';
import cartReducer from './cartReducer';


const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(
    persistedReducer,
    applyMiddleware(ReduxThunk)
  );
  let persistor = persistStore(store)

  return { store, persistor }
}
