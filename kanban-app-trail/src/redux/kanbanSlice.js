import { createSlice } from '@reduxjs/toolkit';

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState: {
    columns: [],
  },
  reducers: {
    addColumn: (state, action) => {
      state.columns.push({
        id: Date.now(),
        title: action.payload,
        tasks: [],
      });
    },
    editColumn: (state, action) => {
      const { id, title } = action.payload;
      const column = state.columns.find((col) => col.id === id);
      if (column) {
        column.title = title;
      }
    },
    deleteColumn: (state, action) => {
      state.columns = state.columns.filter((col) => col.id !== action.payload);
    },
    setColumns: (state, action) => {
      state.columns = action.payload;
    },
  },
});

export const { addColumn, editColumn, deleteColumn, setColumns } = kanbanSlice.actions;
export default kanbanSlice.reducer;
