import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts-reducers';

const store = configureStore({
  reducer: {
    contactReducer,
  },
});
export default store;
