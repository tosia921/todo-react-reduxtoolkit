import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SingleTodo from './SingleTodo';

const TodosContainer = () => {
    const todos = useSelector((state) => state.todos.todosArray);
    console.log(todos);
    return (
        <StyledTodoContainer>
            {todos.length > 0
                ? todos.map((todo) => <SingleTodo key={todo.payload.id} content={todo.payload.content} />)
                : null}
        </StyledTodoContainer>
    );
};

export default TodosContainer;

const StyledTodoContainer = styled.ul`
    height: fit-content;
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
