import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium, { StyleRoot } from 'radium';
import Message from '../../components/Message';
import GreenCheck from '../../assets/images/pain/green_check.png';
import {} from '../../services/analytics';
import styles from './Directions.css';
import messageStyles from '../../components/Message.css';

class Directions extends PureComponent {
  componentWillMount() {
    if (window.analytics) window.analytics.page('Directions');
  }

  onNext = () => {
    const { history, location } = this.props;
    window.analytics.track('Next');
    history.push({
      pathname: '/contact',
      state: {
        condition: location.state.condition,
        treatment: location.state.treatment,
      },
    });
  };

  render() {
    return (
      <StyleRoot>
        <div style={[styles.container]} className="animated fadeIn">
          <Message
            actionButton={(
              <div
                onClick={() => this.onNext()}
                onKeyPress={() => this.onNext()}
                role="button"
                style={messageStyles.actionButton}
                tabIndex={-1}
              >
                NEXT
              </div>
            )}
          >
            <div>
              <div style={messageStyles.header}>
                Great!
              </div>

              <div style={messageStyles.body}>
                Before confirming an appointment, we need the following information.
              </div>

              <div style={styles.infoContainer}>
                <div style={styles.row}>
                  <img
                    src={GreenCheck}
                    alt="Green Check"
                    style={styles.icon}
                  />
                  <span style={messageStyles.subText}>
                    Your contact information
                  </span>
                </div>

                <div style={styles.row}>
                  <img
                    src={GreenCheck}
                    alt="Green Check"
                    style={styles.icon}
                  />
                  <span style={messageStyles.subText}>
                    A referral from your doctor
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

Directions.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Radium(Directions);
