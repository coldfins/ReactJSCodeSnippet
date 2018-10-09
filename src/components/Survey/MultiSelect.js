import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, FlatButton } from 'material-ui';
import Equalizer from 'react-equalizer';

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: _.isArray(props.selectedOptions) ? props.selectedOptions : [],
    };
  }

  onSubmit = () => {
    this.setState({ selectedOptions: [] });
  };

  isSelected = (option) => {
    const { selectedOptions } = this.props;
    return selectedOptions.includes(option);
  };

  selectOption = (selectedOption) => {
    const { onSelection } = this.props;
    const { selectedOptions: prevOptions } = this.state;
    let selectedOptions = [];

    if (!this.isSelected(selectedOption)) {
      selectedOptions = this.validateMaxSelectedOptions(prevOptions);
      if (selectedOption === 'none') {
        selectedOptions = [selectedOption];
      } else if (prevOptions.includes('none')) {
        selectedOptions = [...selectedOptions, selectedOption]
          .filter(_selectedOption => _selectedOption !== 'none');
      } else {
        selectedOptions = [...selectedOptions, selectedOption];
      }
      this.setState({ selectedOptions }, () => onSelection(selectedOptions));
    } else {
      selectedOptions = prevOptions.filter(prevOption => prevOption !== selectedOption);
      this.setState({ selectedOptions }, () => onSelection(selectedOptions));
    }
  };

  validateMaxSelectedOptions = (prevOptions) => {
    const { maxSelectedOptions } = this.props;

    if (_.isNil(maxSelectedOptions)) {
      return prevOptions;
    }

    if (_.size(prevOptions) >= maxSelectedOptions) {
      const [, ...selectedOptions] = prevOptions;
      return selectedOptions;
    }
    return prevOptions;
  };

  renderBody = options => (
    <div>
      <div className="container">
        <div>
          <Equalizer
            byRow={false}
          >
            {
              options.map(option => (
                <div key={option.key} className="answer-row">
                  {this.renderSelection(option, this.isSelected(option.key))}
                </div>
              ))
            }
          </Equalizer>
        </div>
      </div>
    </div>
  );

  renderSelection = (option, isSideSelected) => (
    <div className="option">
      <Card className={`card ${isSideSelected ? 'selected' : ''}`}>
        { this.isSelected(option.key) }
        { option.key }

        <FlatButton
          className="multioption-button"
          icon={option.icon && (
            <img
              alt="option"
              className="svg"
              src={option.icon}
            />
          )}
          label={option.label}
          onClick={() => this.selectOption(option.key)}
        />
      </Card>
    </div>
  );

  render() {
    const { options } = this.props;
    return (
      <div className="component-multi-select animated fadeIn">
        {this.renderBody(options)}
      </div>
    );
  }
}

MultiSelect.propTypes = {
  maxSelectedOptions: PropTypes.number,
  onSelection: PropTypes.func,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.object]),
};

MultiSelect.defaultProps = {
  maxSelectedOptions: 1,
  onSelection: () => {},
  selectedOptions: [],
};

export default MultiSelect;
