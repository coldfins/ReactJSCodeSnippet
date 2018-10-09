import React from 'react';
import PropTypes from 'prop-types';
import { isMobileOnly } from 'react-device-detect';
import {
  FontIcon,
  IconButton,
  RaisedButton,
} from 'material-ui';
import { DialogContainer } from 'react-md';
import TrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import painTheoryWordmark from '../assets/images/logos/paintheory_wordmark_white.svg';

const Introduction = ({
  onNext,
  onRequestClose,
  open,
}) => (
  <DialogContainer
    id="introduction-modal"
    autopadContent={false}
    modal
    portal
    lastChild
    visible={open}
    onHide={onRequestClose}
    width={isMobileOnly ? false : 500}
    fullPage={isMobileOnly}
    focusOnMount={false}
    className="introduction-modal-container"
  >
    <div className="component-introduction-modal animated fadeIn">
      <div className="scaffold">
        <IconButton
          className="close-button"
          onClick={onRequestClose}
          tooltip="close"
        >
          <FontIcon className="material-icons" color="white">
            close
          </FontIcon>
        </IconButton>

        <div className="texts-container">
          <img
            alt="PainTheory"
            className="logo"
            src={painTheoryWordmark}
          />

          <p className="thin">
            Please answer a few questions to help us find the right doctors for you.
          </p>
        </div>

        <RaisedButton
          className="next-button"
          onClick={() => onNext(true)}
        >
          Get Started
          <TrendingFlat className="right-icon" />
        </RaisedButton>
      </div>
    </div>
  </DialogContainer>
);

Introduction.propTypes = {
  onNext: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Introduction;
