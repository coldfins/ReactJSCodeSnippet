import React from 'react';
import PropTypes from 'prop-types';
import { isMobileOnly } from 'react-device-detect';
import {
  FlatButton,
  FontIcon,
  IconButton,
  RaisedButton,
} from 'material-ui';
import { DialogContainer } from 'react-md';
import painTheoryWordmark from '../assets/images/logos/paintheory_wordmark.svg';

const CTAPopupModal = ({ onClick, onRequestClose, visible }) => (
  <DialogContainer
    id="navigator-modal"
    autopadContent={false}
    modal
    portal
    lastChild
    visible={visible}
    onHide={onRequestClose}
    width={isMobileOnly ? false : 500}
    fullPage={isMobileOnly}
    focusOnMount={false}
    className="navigator-modal-container"
  >
    <div className="component-navigator-modal">
      <div className="block">
        <div className="scaffold">
          <div className="title">
            <img
              alt="PainTheory"
              className="logo"
              src={painTheoryWordmark}
            />

            <IconButton
              tooltip="close"
              onClick={onRequestClose}
              className="close-button"
            >
              <FontIcon className="material-icons">
                close
              </FontIcon>
            </IconButton>
          </div>

          <h3>
            GET RID OF YOUR PAIN
          </h3>

          <h1 className="main-text">
            Do you know what type of provider you need?
          </h1>

          <p>
            Take our Provider Navigator Quiz
          </p>

          <div className="buttons-container scaffold">
            <RaisedButton
              label="Find The Right Provider"
              className="btn-primary"
              onClick={() => onClick(true)}
            />

            <FlatButton
              label="I Know What I Want"
              className="btn-secondary"
              onClick={() => onClick(false)}
            />
          </div>
        </div>
      </div>
    </div>
  </DialogContainer>
);

CTAPopupModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default CTAPopupModal;
