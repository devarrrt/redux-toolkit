import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
    checkedTodo(state, action) {
      const newTodo = state.todos.find((el) => el.id === action.payload);
      newTodo.completed = !newTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, checkedTodo } = todoSlice.actions;
export default todoSlice.reducer;
