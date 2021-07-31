import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getTasksAsync = createAsyncThunk(
  'tasks/getTasksAsync',
  async () => {
    const response = await fetch('http://localhost:4000/api/tasks');
    if (response.ok) {
      const tasks = await response.json();
      return tasks;
    }
  });

export const addTaskAsync = createAsyncThunk(
  'tasks/addTasksAsync',
  async (payload) => {
    const response = await fetch('http://localhost:4000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: payload})
    });

    if (response.ok) {
      const task = await response.json();
      return task;
    }
  }
)

export const toggleDoneAsync = createAsyncThunk(
  'tasks/toggleDoneAsync',
  async (payload) => {
    const response = await fetch(`http://localhost:4000/api/tasks/${payload._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({done: !payload.done})
    });

    if (response.ok) {
      const updatedTask = await response.json();
      return updatedTask;
    }
  }
)

export const deleteTaskAsync = createAsyncThunk(
  'tasks/deleteTaskAsync',
  async (payload) => {
    const response = await fetch(`http://localhost:4000/api/tasks/${payload}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      return payload;
    }
  }
)

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
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
  },
  extraReducers: {
    [getTasksAsync.fulfilled]: (state, action) => {
      return action.payload;
    },
    [addTaskAsync.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [toggleDoneAsync.fulfilled]: (state, action) => {
      const task = state.find(task => task._id === action.payload._id);
      task.done = action.payload.done;
    },
    [deleteTaskAsync.fulfilled]: (state, action) => { 
      return state.filter(task => task._id !== action.payload);
    }
  }
});

export const { addTask, toggleDone, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer