import React from 'react';
import PropTypes from 'prop-types';
import Next from 'material-ui/svg-icons/navigation/arrow-forward';
import { white } from 'material-ui/styles/colors';
import styles from './CTAToast.css';

const CTAToast = ({ callback, text }) => (
  <div
    onClick={() => callback()}
    onKeyPress={() => callback()}
    role="button"
    style={styles.toastContainer}
    tabIndex={-1}
  >
    {text}
    <Next color={white} width={20} height={20} style={styles.nextImage} />
  </div>
);

CTAToast.propTypes = {
  callback: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default CTAToast;
