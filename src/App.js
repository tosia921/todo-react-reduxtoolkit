import styled from 'styled-components';
import Input from './components/Input';
import TodosContainer from './components/TodosContainer';
import ActionMenuBottom from './components/ActionMenuBottom';

function App() {
    return (
        <>
            <StyledH1>
                <mark>TODO APP</mark>
            </StyledH1>
            <AppContainer>
                <Input />
                <TodosContainer />
                <ActionMenuBottom />
            </AppContainer>
        </>
    );
}

export default App;

const AppContainer = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
`;

const StyledH1 = styled.h1`
    margin-top: 5rem;
    margin-bottom: 5rem;
    text-align: center;
`;
