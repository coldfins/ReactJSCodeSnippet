import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MenuItem, SelectField, TextField } from 'material-ui';
import { transparent } from 'material-ui/styles/colors';

class Dropdown extends PureComponent {
  constructor() {
    super();
    this.state = {
      isOther: false,
      selected: null,
    };
  }

  onSelectChange = (value) => {
    const { onChange } = this.props;
    const isOther = value.toLowerCase() === 'other' || false;

    this.setState({
      isOther,
      selected: value,
    }, () => onChange(value));
  }

  onTextChange = (value) => {
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const {
      hintText,
      options,
    } = this.props;
    const {
      isOther,
      selected,
    } = this.state;

    return (
      <div>
        <SelectField
          hintText={hintText}
          onChange={(event, index, value) => this.onSelectChange(value)}
          selectedMenuItemStyle={{ color: '#3a55e6' }}
          value={selected}
        >
          {options.map(name => (
            <MenuItem key={name} value={name} primaryText={name} />
          ))}
        </SelectField>


        {isOther && (
          <TextField
            hintText="Enter Value"
            onChange={event => this.onTextChange(event.target.value)}
            underlineFocusStyle={{ borderColor: transparent }}
            className="optional-text"
          />)}
      </div>
    );
  }
}

Dropdown.propTypes = {
  hintText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

Dropdown.defaultProps = {
  onChange: () => {},
};

export default Dropdown;
