import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import styles from './Message.css';

const MessageDesktop = ({
  actionButton,
  children,
  footer,
  provider,
}) => (
  <div style={styles.mainContainer}>
    <div className="row" style={styles.rowContainer}>
      <div
        className="col-6"
        style={_.assign({}, styles.messageContainer, styles.leftMessageContainer)}
      >
        <div style={styles.leftInnerContainer}>
          <img
            style={styles.docImage}
            src={(!_.isNil(provider))
              ? provider.messageAvatar
              : null
            }
            alt="thumbnail"
          />

          <div style={styles.docInfoContainer}>
            <div style={styles.name}>
              {(!_.isNil(provider))
                ? `${provider.firstName} ${provider.lastName}, ${provider.title}`
                : null
              }
            </div>

            <div style={styles.specialty}>
              {(!_.isNil(provider))
                ? provider.specialty
                : null}
            </div>
          </div>
        </div>
      </div>

      <div className="col-6" style={styles.messageContainer}>
        <div style={styles.leftInnerContainer}>
          <div style={styles.message}>
            {children}
          </div>

          <div style={styles.messageFooter}>
            {footer}
          </div>

          <div style={styles.actionButtonContainer}>
            {actionButton}
          </div>
        </div>
      </div>
    </div>
  </div>
);

MessageDesktop.propTypes = {
  actionButton: PropTypes.node,
  children: PropTypes.element,
  footer: PropTypes.object,
  provider: PropTypes.object,
};

MessageDesktop.defaultProps = {
  actionButton: null,
  children: null,
  footer: undefined,
  provider: undefined,
};

export default Radium(MessageDesktop);
