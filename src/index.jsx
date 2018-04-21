import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import styles from '../globals/globals.scss';

const theme = createMuiTheme();

function AppComponent() {
    return (
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <App/>
            </MuiThemeProvider>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <AppComponent/>, 
    document.getElementById("app")
);

module.hot.accept();