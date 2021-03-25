import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllTodos, clearCompletedTodos } from '../redux/todo/todoSlice';

const ActionMenuBottom = () => {
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos.todosArray);
    const TodosLeft = todos.filter((todo) => todo.completed !== true).length;

    return (
        <ActiveMenuContainer>
            <mark>Todo's left: {TodosLeft}</mark>
            <div className="clear-buttons">
                <button className="button-left" type="button" onClick={() => dispatch(clearAllTodos())}>
                    Clear All
                </button>
                <button type="button" onClick={() => dispatch(clearCompletedTodos())}>
                    Clear Completed
                </button>
            </div>
        </ActiveMenuContainer>
    );
};

export default ActionMenuBottom;

const ActiveMenuContainer = styled.div`
    width: 40vw;
    background-color: var(--grey);
    padding: 2.5rem 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;

    .clear-buttons {
        margin-left: auto;

        .button-left {
            margin-right: 1rem;
        }
    }
`;
