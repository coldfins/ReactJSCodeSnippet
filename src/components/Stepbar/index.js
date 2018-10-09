import React from 'react';
import PropTypes from 'prop-types';
import Progress from './Progress';
import LeftElement from './LeftElement';
import RightElement from './RightElement';
import stylesStepbar from './Stepbar.css';

const Stepbar = ({
  leftElementText,
  leftElementOnPress,
  leftElementDisabled,
  progress,
  rightElementText,
  rightElementOnPress,
  rightElementDisabled,
  showProgress,
  style,
}) => {
  const styles = Object.assign({}, stylesStepbar, style);
  return (
    <div>
      <div>
        {showProgress ? <Progress progress={progress} /> : ''}
      </div>

      <div style={styles.container}>
        <LeftElement
          text={leftElementText}
          disabled={leftElementDisabled}
          onPress={leftElementOnPress}
        />
        <RightElement
          text={rightElementText}
          disabled={rightElementDisabled}
          onPress={rightElementOnPress}
        />
      </div>
    </div>
  );
};

Stepbar.propTypes = {
  leftElementDisabled: PropTypes.bool,
  leftElementOnPress: PropTypes.func,
  leftElementText: PropTypes.string,
  progress: PropTypes.number,
  rightElementDisabled: PropTypes.bool,
  rightElementOnPress: PropTypes.func,
  rightElementText: PropTypes.string,
  showProgress: PropTypes.bool,
  style: PropTypes.object,
};

Stepbar.defaultProps = {
  leftElementDisabled: true,
  leftElementOnPress: undefined,
  leftElementText: null,
  progress: null,
  rightElementDisabled: true,
  rightElementOnPress: undefined,
  rightElementText: null,
  showProgress: true,
  style: {},
};

export default Stepbar;
