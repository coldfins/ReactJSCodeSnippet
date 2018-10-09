import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium, { StyleRoot } from 'radium';
import { Tabs, Tab } from 'material-ui/Tabs';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import { grey500 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import CTAToast from '../../components/CTAToast';
import About from './About';
import Reasons from './Reasons';
import Treatment from './Treatment';
import Dangers from './Dangers';
import {} from '../../services/analytics';
import about from '../../assets/images/pain/about.svg';
import aboutSelected from '../../assets/images/pain/about_selected.svg';
import symptoms from '../../assets/images/pain/symptoms.svg';
import symptomsSelected from '../../assets/images/pain/symptoms_selected.svg';
import riskFactors from '../../assets/images/pain/riskFactors.svg';
import riskFactorsSelected from '../../assets/images/pain/riskFactors_selected.svg';
import treatments from '../../assets/images/pain/treatments.svg';
import treatmentsSelected from '../../assets/images/pain/treatments_selected.svg';
import styles from './Condition.css';

class Condition extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'about',
      loading: false,
    };
  }

  componentWillMount() {
    const { condition } = this.props;
    if (window.analytics) {
      window.analytics.page('Condition', {
        condition: condition.title,
      });
    }
    this.getDiagnosisDetail();
  }

  getDiagnosisDetail = () => {
    const { getDiagnosis, patient } = this.props;
    this.setState({ loading: true }, () => {
      getDiagnosis(patient._id).then(() => {
        this._div.scrollTop = 0;
        this.setState({ loading: false });
      }).catch(() => this.setState({ loading: false }));
    });
  };

  render() {
    const {
      condition,
      diagnosis,
      errorMessage,
      history,
    } = this.props;
    const { loading, currentTab } = this.state;
    return (
      <StyleRoot>
        <div style={[styles.container]} className="animated fadeIn">
          <div style={styles.innerContainer}>
            <Loading loading={loading} />

            <ErrorMessage message={errorMessage} />

            <div style={styles.conditionTitle}>
              <IconButton onTouchTap={() => history.goBack()} style={styles.backArrow}>
                <NavigationBack color={grey500} />
              </IconButton>
              {condition.title}
            </div>

            <Tabs
              className="tabs-container"
              onChange={tab => this.setState({ currentTab: tab })}
              inkBarStyle={styles.tabbarInk}
              value={currentTab}
            >
              <Tab
                label={(
                  <div style={styles.text}>
                    About
                  </div>)}
                icon={(
                  <img
                    src={currentTab === 'about' ? aboutSelected : about}
                    alt="about"
                  />
                )}
                style={currentTab === 'about' ? styles.tabSelected : styles.tab}
                value="about"
              >
                <About condition={condition} video={diagnosis.video} />
              </Tab>

              <Tab
                label={(
                  <div style={styles.text}>
                    Symptoms
                  </div>
                )}
                icon={(
                  <img
                    src={currentTab === 'symptoms' ? symptomsSelected : symptoms}
                    alt="symptoms"
                  />
                )}
                style={currentTab === 'symptoms' ? styles.tabSelected : styles.tab}
                value="symptoms"
              >
                <Reasons reasons={diagnosis.reasons} />
              </Tab>

              <Tab
                label={(
                  <div style={styles.text}>
                    Risk Factors
                  </div>
                )}
                icon={(
                  <img
                    src={currentTab === 'riskFactors'
                      ? riskFactorsSelected
                      : riskFactors
                    }
                    alt="riskFactors"
                  />
                )}
                style={currentTab === 'riskFactors' ? styles.tabSelected : styles.tab}
                value="riskFactors"
              >
                <Dangers dangers={diagnosis.dangers} />
              </Tab>

              <Tab
                label={(
                  <div style={styles.text}>
                    Treatments
                  </div>
                )}
                icon={(
                  <img
                    src={currentTab === 'treatments' ? treatmentsSelected : treatments}
                    alt="treatments"
                  />
                )}
                style={currentTab === 'treatments' ? styles.tabSelected : styles.tab}
                value="treatments"
              >
                <Treatment
                  treatments={diagnosis.treatments}
                  history={history}
                  condition={condition}
                />
              </Tab>
            </Tabs>
          </div>
        </div>

        <CTAToast
          callback={() => this.handleToastClick()}
          text="Explore Doctors Near You"
        />
      </StyleRoot>
    );
  }
}

Condition.propTypes = {
  condition: PropTypes.object,
  diagnosis: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  getDiagnosis: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  patient: PropTypes.object.isRequired,
};

Condition.defaultProps = {
  condition: {},
  errorMessage: '',
};

export default Radium(Condition);
