import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui';
import ArrowNext from 'material-ui/svg-icons/navigation/arrow-forward';
import { blue200, grey500 } from 'material-ui/styles/colors';
import ReactPlayer from 'react-player';
import { isMobile } from 'react-device-detect';
import Info from 'material-ui/svg-icons/action/info-outline';
import ConditionVideo from '../../assets/images/pain/condition_video.png';
import ToolTipModal from '../../components/ToolTipModal';
import styles from './Condition.css';
import icons from './icons';

class Treatment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPro: {},
      currentTreatment: {},
      open: false,
      openPro: false,
    };
  }

  onCTAClick = (treatment) => {
    const {
      condition, history,
    } = this.props;
    if (window.analytics) {
      window.analytics.track('Talk to Physician', {
        condition: condition.title,
        location: 'Treatment View',
        treatment: treatment.name,
      });
    }

    history.push({
      pathname: '/directions',
      state: {
        condition: condition.id,
        treatment: treatment._id,
      },
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = (treatment) => {
    this.setState({
      currentTreatment: treatment,
      open: true,
    });
  };

  handleProClose = () => {
    this.setState({ openPro: false });
  };

  handleProOpen = (pro) => {
    this.setState({
      currentPro: pro,
      openPro: true,
    });
  };

  render() {
    const { treatments } = this.props;
    const {
      open,
      currentTreatment,
      openPro,
      currentPro,
    } = this.state;

    return (
      <div>
        <div style={styles.aboutTitle}>
          Treatment Options
        </div>

        {treatments.map(treatment => (
          <div key={treatment.name} style={styles.cardRow}>
            <Card
              onClick={() => this.handleOpen(treatment)}
              onExpandChange={() => this.handleOpen(treatment)}
              style={styles.cardTreatment}
            >
              <CardText>
                <div style={styles.riskLevel}>
                  {treatment.riskLevel}
                </div>

                <div style={styles.treatmentRow}>
                  <img
                    src={ConditionVideo}
                    alt="ConditionVideo"
                    style={styles.conditionImg}
                  />

                  <div style={styles.treatmentTitle}>
                    {treatment.name}
                  </div>

                  <div style={styles.viewTreatment}>
                    View treatment
                    <ArrowNext color={blue200} />
                  </div>
                </div>
              </CardText>
            </Card>

            <ToolTipModal
              open={open}
              handleClose={this.handleClose}
            >
              <div>
                <div style={styles.riskLevel}>
                  {currentTreatment.riskLevel}
                </div>

                <div style={styles.treatmentTitle}>
                  {currentTreatment.name}
                </div>

                <div style={styles.horizontalLine} />

                {(!_.isNil(currentTreatment.media))
                  ? (
                    <div style={styles.videoContainer}>
                      {(treatment.media.type === 'video')
                        ? (
                          <ReactPlayer
                            controls
                            url={treatment.media.video}
                            width={isMobile ? '100%' : '50%'}
                            height={isMobile ? 200 : 350}
                            style={styles.video}
                          />
                        ) : (
                          <img
                            style={styles.thumbnailImage}
                            src={treatment.media.url}
                            alt="thumbnail"
                          />
                        )
                      }
                    </div>
                  ) : null
                }

                <div style={styles.descriptionTitle}>
                  Description
                </div>

                <div style={styles.conditionDescription}>
                  {currentTreatment.explanation}
                </div>

                <div style={styles.descriptionTitle}>
                  Considerations
                </div>

                <div style={styles.treatmentRow}>
                  {(!_.isNil(currentTreatment.pros))
                    ? (
                      <div style={styles.horizontalContainer}>
                        {currentTreatment.pros.map(pro => (
                          <div key={pro.text} style={styles.treatmentInnerRow}>
                            <div style={styles.infoImage}>
                              <Info color={grey500} onClick={() => this.handleProOpen(pro)} />
                            </div>

                            <img style={styles.prosImage} src={icons[pro.icon]} alt="Target" />

                            <div>
                              {pro.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null
                  }
                </div>
              </div>
            </ToolTipModal>

            <ToolTipModal
              open={openPro}
              handleClose={this.handleProClose}
              title={currentPro.text}
              description={currentPro.subText}
            />
          </div>
        ))}
      </div>
    );
  }
}

Treatment.propTypes = {
  condition: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  treatments: PropTypes.arrayOf(PropTypes.shape({
    benefits: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
      subText: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })),
    explanation: PropTypes.string.isRequired,
    media: PropTypes.object,
    name: PropTypes.string.isRequired,
    pros: PropTypes.arrayOf(PropTypes.shape({
      subText: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })),
    steps: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
      subText: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

export default Treatment;
