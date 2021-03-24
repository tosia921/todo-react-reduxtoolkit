import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    todosArray: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: INITIAL_STATE,
    reducers: {
        addTodo: (state, payload) => {
            state.todosArray.push(payload);
        },
    },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
