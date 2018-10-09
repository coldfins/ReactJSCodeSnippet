import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMessage.css';

const ErrorMessage = ({ message }) => (
  <div style={styles.container}>
    <h3 style={styles.message}>
      {message}
    </h3>
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
