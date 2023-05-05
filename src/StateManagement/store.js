import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { onlineStoreReducer }   from "./reducers/onlineStoreReducer";

const reducers = combineReducers({
    onlineStoreReducer
})

const store = configureStore({reducer: reducers});

export default store;