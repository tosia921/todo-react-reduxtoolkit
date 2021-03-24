import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App';

import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import 'normalize.css';

import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <GlobalStyles />
            <Typography />
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
