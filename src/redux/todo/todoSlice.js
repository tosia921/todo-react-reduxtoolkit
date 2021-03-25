import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    todosArray: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: INITIAL_STATE,
    reducers: {
        addTodo: (state, action) => {
            state.todosArray.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todosArray = state.todosArray.filter((todo) => todo.id !== action.payload);
        },
        completedTodo: (state, action) => {
            const existingTodo = state.todosArray.find((todo) => todo.id === action.payload);
            if (existingTodo.completed === false) {
                state.todosArray = state.todosArray.map((todo) =>
                    todo.id === action.payload ? { ...todo, completed: (todo.completed = true) } : todo
                );
            } else {
                state.todosArray = state.todosArray.map((todo) =>
                    todo.id === action.payload ? { ...todo, completed: (todo.completed = false) } : todo
                );
            }
        },
    },
});

export const { addTodo, removeTodo, completedTodo } = todoSlice.actions;

export default todoSlice.reducer;
