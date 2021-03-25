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
    @media only screen and (max-width: 1000px) {
        width: 50vw;
    }
    @media only screen and (max-width: 800px) {
        width: 60vw;
    }
    @media only screen and (max-width: 660px) {
        width: 70vw;
    }
    @media only screen and (max-width: 575px) {
        width: 80vw;
    }
    @media only screen and (max-width: 500px) {
        width: 90vw;
    }

    .clear-buttons {
        margin-left: auto;

        .button-left {
            margin-right: 1rem;
        }
    }
`;
