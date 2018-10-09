import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
import { blue600 } from 'material-ui/styles/colors';
import styles from './Progress.css';

const Progress = ({ progress }) => (
  <Line
    strokeColor={blue600}
    style={styles.container}
    percent={progress}
  />
);

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Progress;
