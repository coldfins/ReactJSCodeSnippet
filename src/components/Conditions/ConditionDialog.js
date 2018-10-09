import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import {
  RaisedButton, IconButton, FontIcon, Dialog, Toolbar,
} from 'material-ui';
import ViewMedica from '../ViewMedica';

const ConditionDialog = ({
  onRequestClose, open, onExploreTreatments,
  item: {
    description, name, symptoms, riskFactors, dangers, video,
  },
}) => (
  <Dialog
    modal
    open={open}
    onClick={() => onRequestClose(false)}
    className="component-card-dialog"
    contentStyle={{
      maxWidth: isMobile ? 'none' : 700,
      width: '100%',
    }}
    autoScrollBodyContent
    title={(
      <Toolbar className="card-modal-title">
        <h2>
          {name}
        </h2>

        <IconButton
          onClick={() => onRequestClose(false)}
        >
          <FontIcon className="material-icons" color="grey">
            close
          </FontIcon>
        </IconButton>
      </Toolbar>
    )}
    actions={(
      <RaisedButton
        label="Search Providers"
        onClick={() => onExploreTreatments()}
        className="proceed-btn"
        icon={(
          <FontIcon className="material-icons">
            trending_flat
          </FontIcon>
        )}
        labelPosition="before"
      />
    )}
    actionsContainerClassName="actions-container"
    paperClassName="component-card-dialog"
  >
    <div>
      <div className="dialog-body">
        {(!_.isNil(video)) && (
          <div className="video-container">
            <ViewMedica openthis={video} />
          </div>
        )}

        <h4>
          DESCRIPTION
        </h4>

        <h5>
          {description}
        </h5>

        {
          symptoms.length > 0 && (
            <h4>
              SYMPTOMS
            </h4>
          )
        }

        <ul>
          {
            symptoms.map(symptom => (
              <li key={symptom}>
                {symptom}
              </li>
            ))
          }
        </ul>

        {
          riskFactors.length > 0 && (
            <h4>
              RISK FACTORS
            </h4>
          )
        }

        <ul>
          {
            riskFactors.map(riskFactor => (
              <li key={riskFactor.name}>
                {riskFactor.name}
              </li>
            ))
          }
        </ul>

        {
          dangers.length > 0 && (
            <h4>
              DANGERS
            </h4>
          )
        }

        <ul>
          {
            dangers.map(danger => (
              <li key={danger}>
                {danger}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </Dialog>
);

ConditionDialog.propTypes = {
  item: PropTypes.shape({
    dangers: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    name: PropTypes.string,
    riskFactors: PropTypes.arrayOf(PropTypes.string),
    symptoms: PropTypes.arrayOf(PropTypes.string),
    video: PropTypes.string,
  }).isRequired,
  onExploreTreatments: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ConditionDialog;
