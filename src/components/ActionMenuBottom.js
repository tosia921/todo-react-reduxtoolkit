import React from 'react';
import styled from 'styled-components';

const ActionMenuBottom = () => {
    const handleClearAll = () => {};
    const handleClearCompleted = () => {};
    return (
        <ActiveMenuContainer>
            <mark>Todo's left: 2</mark>
            <div className="clear-buttons">
                <button className="button-left" type="button" onClick={handleClearAll}>
                    Clear All
                </button>
                <button type="button" onClick={handleClearCompleted}>
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
