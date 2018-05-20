import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './app/App';
import configureStore from './redux/store/configureStore';

const theme = createMuiTheme();
const { store, persistor, history } = configureStore();

function AppComponent() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={theme}>
            <App />
          </MuiThemeProvider>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

ReactDOM.render(
  <AppComponent />,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
