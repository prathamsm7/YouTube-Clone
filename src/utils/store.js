// store.js
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';

// Import your reducers
import appReducer from './appSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
