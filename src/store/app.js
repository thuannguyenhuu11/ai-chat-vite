import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlide/index';

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export default store;
