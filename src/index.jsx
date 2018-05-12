import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { ConnectedRouter } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './app/App';
import configureStore from './redux/store/configureStore';

const PersistGateWithRouter = withRouter(PersistGate);
const theme = createMuiTheme();
const { store, persistor, history } = configureStore();

function AppComponent() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <PersistGateWithRouter loading={null} persistor={persistor}>
            <App />
          </PersistGateWithRouter>
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  );
}

ReactDOM.render(
  <AppComponent />,
  document.getElementById('app'),
);

module.hot.accept();
