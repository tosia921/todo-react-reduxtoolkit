import styled from 'styled-components';
import Input from './components/Input';

function App() {
    return (
        <AppContainer>
            <Input />
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;
