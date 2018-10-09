import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium, { StyleRoot } from 'radium';
import Message from '../../components/Message';
import ImagingCD from '../../assets/images/pain/imagingCD.png';
import InsuranceCard from '../../assets/images/pain/insuranceCard.png';
import {} from '../../services/analytics';
import styles from './Confirmation.css';
import messageStyles from '../../components/Message.css';

class Confirmation extends PureComponent {
  componentWillMount() {
    if (window.analytics) window.analytics.page('Confirmation');
  }

  onDone = () => {
    const { clearState } = this.props;
    window.analytics.track('Done');
    clearState();
  };

  render() {
    return (
      <StyleRoot>
        <div style={[styles.container]} className="animated fadeIn">
          <Message
            actionButton={(
              <div style={messageStyles.actionButton}>
                <button
                  onClick={() => this.onDone()}
                  style={messageStyles.actionButton}
                  type="button"
                >
                  DONE
                </button>
              </div>
            )}
          >
            <div>
              <div style={messageStyles.header}>
                Great!
              </div>

              <div style={messageStyles.body}>
                {`Thanks for considering Sway!
              Be sure to be ready to provide the following information to the clinic.`}
              </div>

              <div style={styles.infoContainer}>
                <div style={styles.row}>
                  <img
                    src={InsuranceCard}
                    alt="Insurance Card"
                    style={styles.icon}
                  />
                  <span style={messageStyles.subText}>
                    Insurance card front/back
                  </span>
                </div>

                <div style={styles.row}>
                  <img
                    src={ImagingCD}
                    alt="Imaging CD"
                    style={styles.icon}
                  />
                  <span style={messageStyles.subText}>
                    Imaging CDs (MRI or CT Scans)
                  </span>
                </div>
              </div>
            </div>
          </Message>
        </div>
      </StyleRoot>
    );
  }
}

Confirmation.propTypes = {
  clearState: PropTypes.func.isRequired,
};

export default Radium(Confirmation);
