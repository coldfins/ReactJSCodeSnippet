import React from 'react';
import PropTypes from 'prop-types';
import { styles, styleEnabled, styleDisabled } from './element.css';

const LeftElement = ({
  children,
  content,
  disabled,
  text,
  onPress,
}) => {
  const stylesElement = (disabled) ? styleDisabled : styleEnabled;
  let element = null;
  const back = '<';

  if (typeof content === 'string') {
    element = (
      <h1 style={stylesElement.text}>
        {content}
      </h1>
    );
  }

  if (typeof text === 'string') {
    element = (
      <div style={styles.leftContainer}>
        <span style={stylesElement.icon}>
          {back}
        </span>
        <span style={stylesElement.text}>
          {text}
        </span>
      </div>
    );
  }

  if (!disabled && typeof onPress === 'function') {
    element = (
      <div style={styles.leftSelectedContainer}>
        <button
          style={styles.leftButton}
          onTouchTap={!disabled ? onPress : null}
          type="button"
        >
          {element}
        </button>
      </div>
    );
  }

  if (children !== undefined) element = children;

  return element;
};

LeftElement.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string,
};

LeftElement.defaultProps = {
  children: undefined,
  content: undefined,
  disabled: true,
  onPress: undefined,
  text: undefined,
};

export default LeftElement;
