import { configureStore } from '@reduxjs/toolkit';
import kanbanReducer from '../redux/kanbanSlice';

const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
  },
});

export default store;
