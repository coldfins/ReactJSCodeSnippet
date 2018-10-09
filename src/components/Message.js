import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { isMobile } from 'react-device-detect';
import MessageDesktop from './MessageDesktop';
import MessageMobile from './MessageMobile';
import styles from './Message.css';

function Message(props) {
  const {
    organization, actionButton, footer, children,
  } = props;
  const provider = _.first(organization.providers);

  return (
    <div style={styles.container}>
      {isMobile
        ? (
          <MessageMobile
            actionButton={actionButton}
            footer={footer}
            provider={provider}
          >
            {children}
          </MessageMobile>
        )
        : (
          <MessageDesktop
            actionButton={actionButton}
            footer={footer}
            provider={provider}
          >
            {children}
          </MessageDesktop>
        )
      }
    </div>
  );
}

Message.propTypes = {
  actionButton: PropTypes.node,
  children: PropTypes.element,
  footer: PropTypes.object,
  organization: PropTypes.shape({
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      street1: PropTypes.string.isRequired,
      street2: PropTypes.string.isRequired,
    }),
    name: PropTypes.string,
    phone: PropTypes.string,
    providers: PropTypes.arrayOf(PropTypes.shape({
      avatar: PropTypes.string,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      messageAvatar: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })),
    website: PropTypes.string,
  }).isRequired,
};

Message.defaultProps = {
  actionButton: null,
  children: null,
  footer: undefined,
};

export default Radium(Message);
