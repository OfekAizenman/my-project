import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import appReducer from './redux/reducers/app';
import App from './app/App.jsx';
import styles from '../globals/globals.scss';

const store = createStore(appReducer);
const theme = createMuiTheme();

function AppComponent() {
    return (
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </MuiThemeProvider>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <AppComponent/>, 
    document.getElementById("app")
);

module.hot.accept();