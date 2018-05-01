import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.jsx';
import configureStore from './redux/store/configureStore';
import styles from './globals/globals.scss';

const theme = createMuiTheme();
const store = configureStore();

function AppComponent() {
    return ( 
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <App />
                </Provider>
            </MuiThemeProvider>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <AppComponent /> ,
    document.getElementById("app")
);

module.hot.accept();