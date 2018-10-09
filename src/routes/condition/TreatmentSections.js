import React from 'react';
import PropTypes from 'prop-types';
import styles from './Condition.css';

class TreatmentSections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'section',
      open: false,
    };
  }

  toggleClick = (treatment) => {
    const { open } = this.state;
    if (window.analytics) {
      window.analytics.track('Treatment Expanded', {
        treatment,
      });
    }
    this.setState({
      class: open ? 'section' : 'section open',
      open: !open,
    });
  };

  render() {
    const { title, children } = this.props;
    const { class: _class } = this.state;
    return (
      <div className={_class} style={styles.sectionContainer}>
        <button
          style={styles.toggleButton}
          type="button"
        >
          toggle
        </button>

        <div
          role="button"
          tabIndex={-1}
          style={styles.sectionHead}
          onClick={() => this.toggleClick(title)}
          onKeyPress={() => this.toggleClick(title)}
        >
          {title}
        </div>

        <div className="articlewrap">
          <div style={styles.sectionContent}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

TreatmentSections.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default TreatmentSections;
