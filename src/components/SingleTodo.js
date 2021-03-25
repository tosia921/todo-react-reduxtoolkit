import React from 'react';
import styled from 'styled-components';
import { ImBin } from 'react-icons/im';
import { MdDone } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removeTodo, completedTodo } from '../redux/todo/todoSlice';

const SingleTodo = ({ content, id, completed }) => {
    const dispatch = useDispatch();
    return (
        <SingleTodoContainer completed={completed}>
            <TodoContent completed={completed}>{content}</TodoContent>
            <IconsContainer>
                <StyledMdDone onClick={() => dispatch(completedTodo(id))} />
                <StyledImBin onClick={() => dispatch(removeTodo(id))} />
            </IconsContainer>
        </SingleTodoContainer>
    );
};

export default SingleTodo;

const SingleTodoContainer = styled.li`
    width: 90%;
    height: fit-content;
    padding: 1rem;
    border-radius: 5px;
    background-color: ${({ completed }) => (completed ? 'var(--red)' : 'var(--darkGrey)')};
    margin-bottom: 1rem;
    display: flex;
    align-items: bottom;
    justify-content: center;
`;
const IconsContainer = styled.div`
    margin-left: auto;
    cursor: pointer;
`;
const StyledImBin = styled(ImBin)`
    cursor: pointer;
`;
const StyledMdDone = styled(MdDone)`
    cursor: pointer;
    margin-right: 10px;
`;
const TodoContent = styled.p`
    text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;
