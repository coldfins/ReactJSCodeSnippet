import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton, FlatButton } from 'material-ui';

const ConfirmCloseQuestionnaireModal = ({
  onRequestClose, onRequestCloseAll, progress,
}) => (
  <div className="component-confirm-close-questionnaire animated fadeIn">
    <h2 className="content-text">
      {`Don't stop now. You're ${Math.ceil(progress)}% done with youre request.`}
    </h2>

    <RaisedButton
      label="Continue Request"
      className="btn-primary"
      onClick={() => onRequestClose(false)}
    />

    <FlatButton
      label="Cancel Request"
      className="btn-secondary"
      onClick={() => onRequestCloseAll()}
    />
  </div>
);

ConfirmCloseQuestionnaireModal.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
  onRequestCloseAll: PropTypes.func.isRequired,
  progress: PropTypes.string.isRequired,
};

export default ConfirmCloseQuestionnaireModal;
