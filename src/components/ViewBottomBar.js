import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium, { StyleRoot } from 'radium';
import styles from './ViewBottomBar.css';

@Radium
class ViewBottomBar extends PureComponent {
  render() {
    const { children, bottomBar } = this.props;

    return (
      <StyleRoot>
        <div style={styles.container}>
          <div style={[styles.row, styles.content]}>
            {children}
          </div>

          <div style={[styles.row, styles.bottom]}>
            {bottomBar}
          </div>
        </div>
      </StyleRoot>
    );
  }
}

ViewBottomBar.propTypes = {
  bottomBar: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default ViewBottomBar;
