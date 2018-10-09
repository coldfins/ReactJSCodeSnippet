import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium, { StyleRoot } from 'radium';
import { Card, CardText } from 'material-ui';
import Next from 'material-ui/svg-icons/navigation/arrow-forward';
import { blue300 } from 'material-ui/styles/colors';
import DisclaimerModal from '../../components/DisclaimerModal';
import Comparing from '../../assets/images/pain/comparing.png';
import Exploring from '../../assets/images/pain/exploring.png';
import Learning from '../../assets/images/pain/learning.png';
import Disclaimer from '../../assets/images/pain/disclaimer.png';
import {} from '../../services/analytics';
import styles from './Goal.css';

class Goal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentWillMount() {
    if (window.analytics) {
      window.analytics.page('Goal');
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { history } = this.props;
    const { open } = this.state;
    return (
      <StyleRoot>
        <div style={[styles.container]} className="animated fadeIn">
          <div style={styles.mainContainer}>
            <div style={styles.topContainer}>
              <div style={styles.titleText}>
                What can we help you with today?
              </div>
            </div>

            <div style={styles.innerContainer}>
              <div style={styles.cardRow}>
                <Card
                  style={styles.card}
                  containerStyle={styles.cardContainer}
                  onClick={() => history.push('/questionnaire')}
                >
                  <CardText style={styles.cardSubText}>
                    <div style={styles.row}>
                      <img alt="Learning" src={Learning} style={styles.image} />

                      <div style={styles.rowContainer}>
                        <div style={styles.title}>
                          Understand What&apos;s Causing My Pain
                        </div>

                        <div style={styles.description}>
                          Start Learning
                          <Next color={blue300} width={20} height={20} />
                        </div>
                      </div>
                    </div>
                  </CardText>
                </Card>

                <Card
                  style={styles.card}
                  containerStyle={styles.cardContainer}
                  onClick={() => history.push('/questionnaire')}
                >
                  <CardText style={styles.cardSubText}>
                    <div style={styles.row}>
                      <img alt="Exploring" src={Exploring} style={styles.image} />

                      <div style={styles.rowContainer}>
                        <div style={styles.title}>
                          Explore Treatment Options
                        </div>

                        <div style={styles.description}>
                          Start Exploring
                          <Next color={blue300} width={20} height={20} />
                        </div>
                      </div>
                    </div>
                  </CardText>
                </Card>

                <Card
                  style={styles.card}
                  containerStyle={styles.cardContainer}
                >
                  <CardText style={styles.cardSubText}>
                    <div style={styles.row}>
                      <img alt="Comparing" src={Comparing} style={styles.image} />

                      <div style={styles.rowContainer}>
                        <div style={styles.title}>
                          Compare Top Doctors Near Me
                        </div>

                        <div style={styles.description}>
                          Start Comparing
                          <Next color={blue300} width={20} height={20} />
                        </div>
                      </div>
                    </div>
                  </CardText>
                </Card>
              </div>
            </div>

            <div
              role="button"
              style={styles.footerContainer}
              tabIndex={-1}
              onClick={this.handleClickOpen}
              onKeyPress={this.handleClickOpen}
            >
              Medical Disclaimer
              <img
                alt=""
                src={Disclaimer}
                style={styles.icon}
              />
            </div>
          </div>

          <DisclaimerModal
            open={open}
            handleClose={this.handleClose}
            text="This tool does not provide medical advise.
              It is intended for informational purposes only.
              It is not a substitute for professional medical advice, diagnosis, or treatment."
          />
        </div>
      </StyleRoot>
    );
  }
}

Goal.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Radium(Goal);
