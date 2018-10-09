import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { isMobile } from 'react-device-detect';
import styles from './Condition.css';

const About = ({ condition, video }) => (
  <div>
    <div style={styles.aboutTitle}>
      About
    </div>

    <div style={styles.videoContainer}>
      <ReactPlayer
        controls
        url={video}
        width="100%"
        height={isMobile ? 200 : 350}
        style={styles.video}
      />
    </div>

    <div style={styles.conditionDescription}>
      {condition.description}
    </div>
  </div>
);

About.propTypes = {
  condition: PropTypes.shape({
    description: PropTypes.string,
  }),
  video: PropTypes.string,
};

About.defaultProps = {
  condition: {
    description: '',
  },
  video: '',
};

export default About;
