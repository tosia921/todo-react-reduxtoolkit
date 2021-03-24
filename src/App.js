import styled from 'styled-components';
import Input from './components/Input';
import TodosContainer from './components/TodosContainer';

function App() {
    return (
        <>
            <StyledH1>TODO APP</StyledH1>
            <AppContainer>
                <Input />
                <TodosContainer />
            </AppContainer>
        </>
    );
}

export default App;

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
`;

const StyledH1 = styled.h1`
    margin-top: 5rem;
    margin-bottom: 5rem;
    text-align: center;
`;
