import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleTodo from './SingleTodo';

const TodosContainer = () => {
    const todos = useSelector((state) => state.todos.todosArray);

    return (
        <StyledTodoContainer>
            {todos.length > 0 ? (
                todos.map((todo) => (
                    <SingleTodo key={todo.id} content={todo.content} id={todo.id} completed={todo.completed} />
                ))
            ) : (
                <h2>your list is empty</h2>
            )}
        </StyledTodoContainer>
    );
};

export default TodosContainer;

const StyledTodoContainer = styled.ul`
    min-height: 3rem;
    width: 40vw;
    background-color: var(--grey);
    padding: 2.5rem 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
`;
