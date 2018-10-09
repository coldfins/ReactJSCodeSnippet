import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { IntlProvider } from 'react-intl';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import ReactPixel from 'react-facebook-pixel';
import RedBox from 'redbox-react';
import { fade } from 'material-ui/utils/colorManipulator';
import {
  darkBlack,
  blue500,
  blue700,
  fullBlack,
  grey100,
  grey400,
  grey500,
  pink600,
  tealA700,
  white,
} from 'material-ui/styles/colors';
import createStore from './store/createStore';
import App from './App';
import './styles/index.scss';

// Theme Definition
// ------------------------------------
const muiTheme = getMuiTheme({
  borderRadius: 0,
  palette: {
    accent1Color: pink600,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white,
    canvasColor: white,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: tealA700,
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: grey400,
    secondaryTextColor: fade(darkBlack, 0.54),
    shadowColor: fullBlack,
    textColor: darkBlack,
  },
  slider: {
    handleSize: 20,
    handleSizeActive: 25,
  },
});

// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__);
injectTapEventPlugin();

if (__PROD__) {
  ReactPixel.init(process.env.PIXEL_ID);
  ReactPixel.pageView();
  ReactPixel.fbq('track', 'PageView');
}

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root');

let render = (Component) => {
  ReactDOM.render(
    <div>
      <IntlProvider locale="en">
        <MuiThemeProvider muiTheme={muiTheme}>
          <Provider store={store}>
            <Router>
              <Route path="/" component={Component} />
            </Router>
          </Provider>
        </MuiThemeProvider>
      </IntlProvider>
    </div>,
    MOUNT_NODE,
  );
};

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render;
    const renderError = (error) => {
      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
    };

    render = (component) => {
      try {
        renderApp(component);
      } catch (e) {
        console.error(e); // eslint-disable-line no-console
        renderError(e);
      }
    };

    // Setup hot module replacement
    module.hot.accept([
      './App',
      './routes/index',
    ], () => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      render(App);
    });
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render(App);
