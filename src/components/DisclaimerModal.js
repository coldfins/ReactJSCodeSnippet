import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from 'material-ui';
import { grey500 } from 'material-ui/styles/colors';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import styles from './DisclaimerModal.css';

function DisclaimerModal(props) {
  const {
    open, handleClose, text,
  } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <div style={styles.closeImage}>
        <NavigationClose color={grey500} onClick={handleClose} />
      </div>

      <div style={styles.disclaimerText}>
        {text}
      </div>
    </Dialog>
  );
}

DisclaimerModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

DisclaimerModal.defaultProps = {
  open: false,
};

export default DisclaimerModal;
