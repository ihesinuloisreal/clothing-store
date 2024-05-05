import { configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

const middleWares = [logger];

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware(...middleWares),
})
export const persistor = persistStore(store);
export default {store, persistor}