import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTasks: (state, action) => {
      const { name } = action.payload;
      state.push({ id: new Date().getTime(), name });
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTasks, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
