import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Spinner from 'react-spinkit';

const Loading = ({ loading, message, pastDelay }) => {
  if (loading || !pastDelay) {
    return (
      <div className="component-loading">
        <Spinner name="circle" className="spinner" fadeIn="none" />

        <div className="text">
          {message}
        </div>
      </div>
    );
  }
  return null;
};

Loading.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
  pastDelay: PropTypes.bool,
};

Loading.defaultProps = {
  loading: false,
  message: 'Compiling your results...',
  pastDelay: true,
};

export default Radium(Loading);
