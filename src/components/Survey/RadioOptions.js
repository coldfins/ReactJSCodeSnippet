import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FlatButton, Card } from 'material-ui';
import Equalizer from 'react-equalizer';

class RadioOptions extends PureComponent {
  renderChoice = (option) => {
    const { onSelection } = this.props;
    return (
      <Card className="card">
        <FlatButton
          className={`radio-option-btn ${_.isNil(option.icon) ? '' : 'flatButton'}`}
          label={option.label}
          onClick={() => onSelection(option.key)}
          icon={option.icon && (
            <img
              alt="option"
              className="svg"
              src={option.icon}
            />
          )}
        />
      </Card>
    );
  };

  render() {
    const { options } = this.props;
    return (
      <div className="component-radio-options animated fadeIn">
        <div className="sub-section">
          <Equalizer byRow={false}>
            {options.map(option => (
              <div key={option.key} className="option-container">
                {this.renderChoice(option)}
              </div>
            ))}
          </Equalizer>
        </div>
      </div>
    );
  }
}

RadioOptions.propTypes = {
  onSelection: PropTypes.func,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

RadioOptions.defaultProps = {
  onSelection: () => {},
};

export default RadioOptions;
