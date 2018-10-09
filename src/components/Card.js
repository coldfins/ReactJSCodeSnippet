import React from 'react';
import PropTypes from 'prop-types';
import { Card as MuiCard, CardHeader, CardTitle } from 'material-ui';
import styles from './Card.css';

const Card = ({ children, title }) => (
  <div style={styles.mainContainer}>
    <MuiCard>
      <CardHeader>
        <CardTitle style={styles.title}>
          {title}
        </CardTitle>
      </CardHeader>

      <div>
        {children}
      </div>
    </MuiCard>
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  title: '',
};

export default Card;
