import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Next from '../../assets/images/pain/ic_next.png';
import styles from './Condition.css';

const PotentialDiagnosis = ({ callback, conditions }) => (
  <div style={styles.potentialInfoContainer}>
    <div style={_.assign(styles.fractureText, styles.potentialHeader)}>
      Other Potential Diagnoses
    </div>

    <div style={styles.potentialInfoStyle}>
      {conditions.map(condition => (
        <div key={condition.id} className="row" style={styles.potentialInfoTextStyle}>
          <div className="col-9">
            {condition.title}
          </div>

          <div
            className="col-2"
            onClick={() => callback(condition.id)}
            onKeyPress={() => callback(condition.id)}
            role="button"
            tabIndex={-1}
          >
            <img style={styles.nextImage} src={Next} alt="Next" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

PotentialDiagnosis.propTypes = {
  callback: PropTypes.func.isRequired,
  conditions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    symptoms: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default PotentialDiagnosis;
