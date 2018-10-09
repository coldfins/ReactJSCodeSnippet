import React from 'react';
import PropTypes from 'prop-types';
import styles from './DirectionalBlurb.css';

const DirectionalBlurb = ({ message, organization }) => (
  <div className="row" style={styles.directionalBlurbStyle}>
    <div className="col-xs-4" style={styles.docContainer}>
      <img style={styles.doctorImage} src={organization.providers[0].avatar} alt="Doctor" />
    </div>

    <div className="col-xs-8" style={styles.directionalBlurbContainer}>
      <div style={styles.directionalBlurbText}>
        {message}
      </div>
    </div>
  </div>
);

DirectionalBlurb.propTypes = {
  message: PropTypes.string.isRequired,
  organization: PropTypes.object.isRequired,
};

export default DirectionalBlurb;
