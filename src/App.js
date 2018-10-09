import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleRoot } from 'radium';
import { hot } from 'react-hot-loader';
import Routes from './routes';
import WithErrorBoundary from './components/WithErrorBoundary';

const App = ({ history, location, match }) => (
  <StyleRoot>
    <div className="component-app-root">
      <Routes
        history={history}
        location={location}
        match={match}
      />
    </div>
  </StyleRoot>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default hot(module)(connect()(WithErrorBoundary(App)));
