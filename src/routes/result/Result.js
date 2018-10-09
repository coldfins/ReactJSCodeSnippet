import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium, { StyleRoot } from 'radium';
import { Card, CardText } from 'material-ui';
import Intercom from 'react-intercom';
import ArrowNext from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-downward';
import { blue200 } from 'material-ui/styles/colors';
import CTAToast from '../../components/CTAToast';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import {} from '../../services/analytics';
import ConditionVideo from '../../assets/images/pain/condition_video.png';
import styles from './Result.css';

class Result extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      numberOfConditions: 3,
    };
  }

  componentWillMount() {
    const {
      getConditions, patient, conditions, history,
    } = this.props;
    if (window.analytics) {
      window.analytics.page('Conditions');
    }
    this.setState({ loading: true }, () => {
      getConditions(patient._id).then(() => {
        this.setState({ loading: false });
        if (conditions.length === 1) {
          history.push(`/conditions/${conditions[0].id}`);
        }
      }).catch(() => this.setState({ loading: false }));
    });
  }

  handleToastClick = () => {
    const { history } = this.props;
    window.analytics.track('Talk to Physician', {
      condition: null,
      location: 'Toast',
    });
    history.push({
      pathname: '/directions',
      state: {
        condition: null,
        treatment: null,
      },
    });
  };

  renderQualifiers = (position) => {
    if (position === 0) {
      return (
        <div style={_.assign(styles.qualifiersMost, styles.qualifiers)}>
          MOST LIKELY
        </div>
      );
    }

    if (position === 1) {
      return (
        <div style={_.assign(styles.qualifiersPossible, styles.qualifiers)}>
          POSSIBLE
        </div>
      );
    }

    return (
      <div style={_.assign(styles.qualifiersLeast, styles.qualifiers)}>
        LEASE LIKELY
      </div>
    );
  }

  render() {
    const {
      conditions: _conditions,
      errorMessage,
      history,
    } = this.props;
    const {
      numberOfConditions,
      loading,
    } = this.state;
    const user = {
      user_id: localStorage.getItem('uniqueIdentifier'),
    };
    const conditions = _conditions.slice(0, numberOfConditions);

    return (
      <StyleRoot>
        <div>
          <CTAToast
            callback={() => this.handleToastClick()}
            text="Explore Doctors Near You"
          />

          <div style={styles.container} className="animated fadeIn">
            <Loading loading={loading} />

            <div style={styles.innerContainer}>
              <ErrorMessage message={errorMessage} />

              <div style={styles.title}>
                It looks like you might have one of the following…
              </div>

              <div>
                {conditions.map((condition, position) => (
                  <div key={condition.id} style={styles.cardRow}>
                    <Card
                      onClick={() => history.push(`/conditions/${condition.id}`)}
                      onExpandChange={() => history.push(`/conditions/${condition.id}`)}
                      style={styles.card}
                    >
                      <CardText>
                        {this.renderQualifiers(position)}

                        <div style={styles.row}>
                          <img
                            src={ConditionVideo}
                            alt="ConditionVideo"
                            style={styles.conditionImg}
                          />

                          <div style={styles.conditionTitle}>
                            {condition.title}
                          </div>

                          <div style={styles.conditionSymtoms}>
                            <div style={styles.treatmentText}>
                              View
                              <b>
                                {condition.treatmentCount}
                              </b>
                              treatment options
                            </div>

                            <ArrowNext color={blue200} />
                          </div>
                        </div>
                      </CardText>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div
              onClick={() => this.setState({ numberOfConditions: conditions.length })}
              onKeyPress={() => this.setState({ numberOfConditions: conditions.length })}
              role="button"
              style={(numberOfConditions === 3)
                ? styles.viewAllContainer
                : styles.hideContainer
              }
              tabIndex={-1}
            >
              <div style={styles.treatmentText}>
                See All Conditions
              </div>

              <ArrowDown color={blue200} />
            </div>

            <Intercom appID={process.env.INTERCOM_APP_ID} {...user} />
          </div>
        </div>
      </StyleRoot>
    );
  }
}

Result.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    symptoms: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })),
  errorMessage: PropTypes.string,
  getConditions: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  patient: PropTypes.object,
};

Result.defaultProps = {
  conditions: [],
  errorMessage: '',
  patient: {},
};

export default Radium(Result);
