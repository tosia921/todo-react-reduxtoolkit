import React from 'react';
import styled from 'styled-components';
import { ImBin } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todo/todoSlice';

const SingleTodo = ({ content, id }) => {
    const dispatch = useDispatch();
    return (
        <SingleTodoContainer>
            <p>{content}</p>
            <StyledImBin onClick={() => dispatch(removeTodo(id))} />
        </SingleTodoContainer>
    );
};

export default SingleTodo;

const SingleTodoContainer = styled.li`
    width: 90%;
    height: fit-content;
    padding: 1rem;
    border-radius: 5px;
    background-color: var(--darkGrey);
    margin-bottom: 1rem;
    display: flex;
    align-items: bottom;
    justify-content: center;
`;
const StyledImBin = styled(ImBin)`
    margin-left: auto;
    cursor: pointer;
`;
