import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Slider as MuiSlider } from 'material-ui';

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.defaultValue = 5;
    this.state = {
      value: this.defaultValue,
    };
  }

  componentWillMount() {
    const { onChange } = this.props;
    onChange(this.defaultValue);
  }

  onChange = (value) => {
    const { onChange } = this.props;
    this.setState({ value }, () => {
      onChange(value);
    });
  };

  render() {
    const {
      icons, max, min, step,
    } = this.props;
    const { value } = this.state;
    return (
      <div className="component-slider animated fadeIn">
        <div>
          <img alt="Scale" src={icons[value]} className="scale-image" />
        </div>

        <div>
          {value}
        </div>

        <div>
          out of 10
        </div>

        <MuiSlider
          className="slider"
          defaultValue={this.defaultValue}
          max={max}
          min={min}
          onChange={(_e, v) => this.onChange(v)}
          step={step}
          value={value}
        />
      </div>
    );
  }
}

Slider.propTypes = {
  icons: PropTypes.object.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.number,
};

Slider.defaultProps = {
  max: 10,
  min: 0,
  step: 1,
};

export default Slider;
