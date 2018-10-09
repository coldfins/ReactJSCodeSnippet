import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ConditionCard from '../../components/Conditions/ConditionCard';
import ConditionDialog from '../../components/Conditions/ConditionDialog';
import Loading from '../../components/Loading';
import MedicalContentBanner from '../../components/MedicalContentBanner';

class Conditions extends PureComponent {
  constructor() {
    super();
    this.initialItem = {
      dangers: [],
      description: '',
      img: '',
      name: '',
      rarity: '',
      riskFactors: [],
      symptoms: [],
      video: '',
    };

    this.state = {
      item: { ...this.initialItem },
      processing: false,
      visible: false,
    };
  }

  componentDidMount() {
    const { getConditions } = this.props;
    this.setState({ processing: true }, () => getConditions());
  }

  static getDerivedStateFromProps(nextProps) {
    return { processing: nextProps.processing };
  }

  handleExploreTreatments = () => {
    const { history } = this.props;
    history.push('/providers');
  }

  handleToggleVisible = (visible, item) => {
    this.setState({
      item: item || this.initialItem, visible,
    });
  }

  render() {
    const { conditions } = this.props;
    const { visible, item, processing } = this.state;

    if (processing) {
      return <Loading />;
    }

    return (
      <div className="component-card">
        <MedicalContentBanner
          heading="Explore six common causes of back pain"
          subText="Patients with basic insight into possible causes of their
            pain get diagnosed faster and have better outcomes."
        />

        <div className="card-container">
          <div className="card-list">
            {conditions.map(each => (
              <ConditionCard
                item={each}
                key={each.key}
                onSelectCard={this.handleToggleVisible}
              />
            ))}
          </div>
        </div>

        <ConditionDialog
          open={visible}
          onRequestClose={this.handleToggleVisible}
          onExploreTreatments={this.handleExploreTreatments}
          item={item}
        />
      </div>
    );
  }
}

Conditions.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.shape({
    dangers: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    rarity: PropTypes.string,
    riskFactors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    symptoms: PropTypes.arrayOf(PropTypes.string),
    video: PropTypes.string,
  })).isRequired,
  getConditions: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Conditions;
