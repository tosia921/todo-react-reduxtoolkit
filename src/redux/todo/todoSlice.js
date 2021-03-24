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
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
