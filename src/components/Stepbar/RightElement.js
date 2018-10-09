import React from 'react';
import PropTypes from 'prop-types';
import { styles, styleEnabled, styleDisabled } from './element.css';

const RightElement = ({
  children,
  content,
  disabled,
  text,
  onPress,
}) => {
  const stylesElement = (disabled) ? styleDisabled : styleEnabled;
  let element = null;
  const next = '>';

  if (typeof content === 'string') {
    element = (
      <h1 style={stylesElement.text}>
        {content}
      </h1>
    );
  }

  if (typeof text === 'string') {
    element = (
      <div style={styles.rightContainer}>
        <span style={stylesElement.text}>
          {text}
        </span>

        <span style={stylesElement.icon}>
          {next}
        </span>
      </div>
    );
  }

  if (!disabled && typeof onPress === 'function') {
    element = (
      <div style={styles.rightSelectedContainer}>
        <button
          style={styles.rightButton}
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

RightElement.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string,
};

RightElement.defaultProps = {
  children: undefined,
  content: undefined,
  disabled: true,
  onPress: undefined,
  text: undefined,
};

export default RightElement;
