import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import {
  Card as MuiCard,
  FlatButton,
  IconButton,
  FontIcon,
  RaisedButton,
} from 'material-ui';
import TrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import CTAFinder from '../assets/images/pain/ctaFind.svg';

const CTAPopupToast = ({ onRequestClose, onNavigate }) => (
  <div className="cta-popup-main-container">
    <MuiCard>
      <div className="cta-inner-container">
        <IconButton
          tooltip="close"
          onClick={onRequestClose}
          className="close-button"
        >
          <FontIcon className="material-icons" color="white">
            close
          </FontIcon>
        </IconButton>

        <div className="cta-left-container">
          {!isMobile && (
            <img
              className="cta-image"
              src={CTAFinder}
              alt="CTA"
            />
          )}

          <div className="cta-finder-container">
            <h3 className="cta-header">
              Let us help you find a doctor
            </h3>

            <h4 className="cta-text">
              Take our provider-finder quiz in 60 seconds
            </h4>
          </div>

          <div className="cta-action-container">
            <RaisedButton
              className="btn-primary"
              onClick={onNavigate}
            >
              Get Started
              <TrendingFlat className="right-icon" />
            </RaisedButton>

            {!isMobile && (
              <FlatButton
                label="No Thanks"
                className="btn-secondary"
                onClick={onRequestClose}
              />
            )}
          </div>
        </div>
      </div>
    </MuiCard>
  </div>
);

CTAPopupToast.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default CTAPopupToast;
