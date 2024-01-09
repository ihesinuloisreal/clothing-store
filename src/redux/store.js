import { applyMiddleware  } from 'redux';
// import { configureStore, createReducer } from '@reduxjs/toolkit'
import logger from 'redux-logger';

import rootReducer from './root-reducer';
import { legacy_createStore as createStore } from 'redux';

const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares))

export default store