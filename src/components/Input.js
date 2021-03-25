// This component renders form input for our ToDo's

import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todo/todoSlice';

const Input = () => {
    const [typedTodo, setTodo] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (typedTodo.length > 0) {
            dispatch(
                addTodo({
                    content: typedTodo,
                    completed: false,
                    id: Date.now(),
                })
            );
            setTodo('');
        }
    };

    return (
        <StyledInput>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">
                    type in your todo:
                    <input type="text" id="todo" value={typedTodo} onChange={(e) => setTodo(e.target.value)} />
                </label>
                <button type="submit" onSubmit={handleSubmit}>
                    Add
                </button>
            </form>
        </StyledInput>
    );
};

export default Input;

const StyledInput = styled.div`
    padding: 1rem;
    background-color: var(--grey);
    border-radius: 5px;

    form {
        width: 40vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        label {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            input {
                width: 90%;
                margin-bottom: 1rem;
                border: 2px solid var(--black);
                border-radius: 5px;
                padding: 0.5rem 2rem;
                font-size: 2rem;

                &:focus {
                    outline: none;
                }
            }
        }
    }
`;
