import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './rootReducer'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { light, dark } from './themes'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(light)}>
      < CssBaseline />
      <LandingPage />
    </MuiThemeProvider>
  );
}

export const store = createStore(
  rootReducer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)