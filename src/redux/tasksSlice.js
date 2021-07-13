import { createSlice } from '@reduxjs/toolkit';

const initialState = [{id: 0, title: 'Smaug'}];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: state.length ? state.reduce((maxId, {id}) => id > maxId ? id : maxId, 0) + 1 : 0,
        title: action.payload,
        done: false
      };
      state.push(task);
    },
    toggleDone: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    }
  }
});

export const { addTask, toggleDone, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer