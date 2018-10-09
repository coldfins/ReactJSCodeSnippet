import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TextField } from 'material-ui';
import TrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import { white } from 'material-ui/styles/colors';
import Intercom from 'react-intercom';
import { isMobile } from 'react-device-detect';
import painTheoryWordmark from '../../assets/images/logos/paintheory_wordmark.svg';
import painTheoryWordmarkWhite from '../../assets/images/logos/paintheory_wordmark_white.svg';

class Footer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
    };
  }

  handleSubscribeClick(email) {
    const { setSubscribe } = this.props;

    setSubscribe(email).then(() => {
      this.setState({ email: '' });
    }).catch(() => this.setState({ email: '' }));
  }

  render() {
    const { subscribe } = this.props;
    const { email } = this.state;
    const user = {
      user_id: localStorage.getItem('uniqueIdentifier'),
    };

    return (
      <div className="component-footer footer-container">
        <div className="footer-inner-container">
          <div className="footer-row">
            <Link to="/">
              <img
                alt="Pain Theory"
                src={isMobile ? painTheoryWordmarkWhite : painTheoryWordmark}
                className="footer-logo"
              />
            </Link>
          </div>

          <div className="footer-row">
            <div className="footer-title">
              Learn More
            </div>

            <div className="footer-sub-text">
              <Link to="/faq" className="footer-link">
                FAQ
              </Link>
            </div>

            <div className="footer-sub-text">
              <Link to="/provider-faq" className="footer-link">
                Providers FAQ
              </Link>
            </div>

            <div className="footer-sub-text">
              <Link to="/treatments" className="footer-link">
                Treatments
              </Link>
            </div>

            <div className="footer-sub-text">
              <Link to="/conditions" className="footer-link">
                Conditions
              </Link>
            </div>
          </div>

          <div className="footer-row">
            <div className="footer-title">
              Legal
            </div>

            <div className="footer-sub-text">
              <Link to="/privacy" className="footer-link">
                Privacy Policy
              </Link>
            </div>

            <div className="footer-sub-text">
              <Link to="/terms-conditions" className="footer-link">
                Terms & Conditions
              </Link>
            </div>

            <div className="footer-sub-text">
              <Link to="/disclaimer" className="footer-link">
                Disclaimer
              </Link>
            </div>
          </div>

          <div className="footer-row">
            <div className="footer-title">
              Contact Us
            </div>

            <div className="footer-sub-text">
              contact@sway.md
            </div>
          </div>

          <div className="footer-row">
            <div className="footer-title">
              Join Our Newsletter
            </div>

            <div className="input-group mb-3">
              <TextField
                id="newsletter"
                label=""
                className="form-control"
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
                underlineShow={false}
              />

              <div
                className="input-group-append"
                onClick={() => this.handleSubscribeClick(email)}
                onKeyPress={() => this.handleSubscribeClick(email)}
                role="button"
                tabIndex={-1}
              >
                <span className="input-group-text">
                  <TrendingFlat color={white} className="right-icon" />
                </span>
              </div>
            </div>

            {subscribe.error_count === 0
              ? (
                <div className="footer-message-text">
                  Thank you! Your submission has been received!
                </div>
              ) : null
            }
          </div>
        </div>

        <div className="copyright-text">
          © Sway Health, Inc. All rights reserved 2018
        </div>

        <Intercom appID={process.env.INTERCOM_APP_ID} {...user} key="footer-intercom" />
      </div>
    );
  }
}

Footer.propTypes = {
  setSubscribe: PropTypes.func.isRequired,
  subscribe: PropTypes.object.isRequired,
};

export default Footer;
