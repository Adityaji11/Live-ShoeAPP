// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../src/Slices/auth/authSlice"
import storage from 'redux-persist/lib/storage'
import { persistReducer ,persistStore } from 'redux-persist'
import customerReducer from './Slices/Custromers/customerSlice';
import ProductReducer from './Slices/Products/ProductSlice';
import BrandReducer from './Slices/Brand/BrandSlice';

const persistConfig = {
  key: 'root',
  storage,
}

const authpersistedReducer = persistReducer(persistConfig,authReducer)
// const customerpersistedReducer = persistReducer(persistConfig,customerReducer)

export const store = configureStore({
  reducer:{
    auth: authpersistedReducer,
    users : customerReducer,
    products : ProductReducer,
    brands :BrandReducer,
  }
});

export const persistor = persistStore(store)
