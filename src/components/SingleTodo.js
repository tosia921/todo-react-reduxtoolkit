import React from 'react';
import styled from 'styled-components';

const SingleTodo = ({ content }) => (
    <SingleTodoContainer>
        <p>{content}</p>
    </SingleTodoContainer>
);

export default SingleTodo;

const SingleTodoContainer = styled.li`
    width: 90%;
    height: fit-content;
    padding: 1rem;
    border-radius: 5px;
    background-color: var(--darkGrey);
    margin-bottom: 1rem;
`;
