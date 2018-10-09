import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ViewMedica extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      client: process.env.VIEWMEDICA_CLIENT,
      width: 720,
    };
    this.script = null;
  }

  componentDidMount() {
    this.script = document.createElement('script');
    this.script.type = 'text/javascript';

    if (this.script.readyState) {
      this.script.onreadystatechange = () => {
        if (this.script.readyState === 'loaded' || this.script.readyState === 'complete') {
          this.script.onreadystatechange = null;
          this.loaded();
        }
      };
    } else {
      this.script.onload = () => {
        this.loaded();
      };
    }

    this.script.src = process.env.VIEWMEDICA_JS;
    document.querySelector('head').appendChild(this.script);
  }

  componentWillUnmount() {
    document.querySelector('head').removeChild(this.script);
  }

  loaded() {
    const { client, width } = this.state;
    const { openthis } = this.props;

    window.vm_open({
      client,
      openthis,
      width,
    });
  }

  render() {
    const { openthis } = this.props;

    return (
      <div id={openthis} />
    );
  }
}

ViewMedica.propTypes = {
  openthis: PropTypes.string.isRequired,
};

export default ViewMedica;
