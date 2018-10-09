import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Radium, { StyleRoot } from 'radium';
import Doctor from '../../assets/images/pain/doctor.png';
import messageStyles from './Message.css';

const Message = ({
  Icon,
  organization,
  style,
  title,
  text,
  subtext,
}) => {
  const styles = _.assign({}, messageStyles, style);

  return (
    <StyleRoot>
      <div style={[styles.container]} className="animated fadeIn">
        <div style={styles.container}>
          <div style={styles.icon}>
            {Icon
              ? <Icon style={styles.iconStyle} />
              : (
                <div style={styles.docContainer}>
                  <img
                    style={styles.doctorImage}
                    src={!_.isNil(organization) ? organization.providers[0].avatar : Doctor}
                    alt="Doctor"
                  />
                </div>
              )
            }
          </div>

          <div style={styles.title}>
            {title}
          </div>

          <div style={styles.text}>
            {text}
          </div>

          <div style={styles.subText}>
            {subtext}
          </div>
        </div>
      </div>
    </StyleRoot>
  );
};

Message.propTypes = {
  Icon: PropTypes.func,
  organization: PropTypes.object.isRequired,
  style: PropTypes.object,
  subtext: PropTypes.string,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Message.defaultProps = {
  Icon: null,
  style: {},
  subtext: '',
};

export default Radium(Message);
