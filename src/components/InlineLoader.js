import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

const InlineLoader = ({ loading, pastDelay, message }) => {
  if (loading || pastDelay) {
    return (
      <div className="component-inline-loading">
        <Spinner name="circle" className="spinner" fadeIn="none" />

        <p>
          {message}
        </p>
      </div>
    );
  }
  return null;
};

InlineLoader.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
  pastDelay: PropTypes.bool,
};

InlineLoader.defaultProps = {
  loading: true,
  message: 'loading',
  pastDelay: false,
};

export default InlineLoader;
