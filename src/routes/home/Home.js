import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import TrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import { white } from 'material-ui/styles/colors';
import qs from 'query-string';
import {} from '../../services/analytics';
import { providerTypeText } from '../../helpers/provider';
import ProviderDetailModal from '../providers/providerDetail/ProviderDetailModal';
import PhysicalBg from '../../assets/images/pain/bgPhysical.jpg';
import SpineBg from '../../assets/images/pain/bgSpine.jpg';
import MinimallyBg from '../../assets/images/pain/bgMinimally.jpg';
import CheckMark from '../../assets/images/pain/checkMark.svg';
import MobileProvider from '../../assets/images/pain/mobileProvider.png';
import DesktopProvider from '../../assets/images/pain/desktopProvider.png';
import ExplainerStep1 from '../../assets/images/pain/explainerStep1.svg';
import ExplainerStep2 from '../../assets/images/pain/explainerStep2.png';
import FunnelDot from '../../assets/images/pain/funnelDot.gif';
import Banner from '../../assets/images/pain/banner.jpg';
import AreaProvidersMobile from './AreaProvidersMobile';
import AreaProvidersDesktop from './AreaProvidersDesktop';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      provider: null,
    };
  }

  componentDidMount() {
    const { fetchProviders, showCTA, visitedCTA } = this.props;
    if (window.analytics) window.analytics.page('Home');
    window.addEventListener('scroll', this.handleScroll);
    this.timer = setTimeout(() => {
      if (!visitedCTA) showCTA();
    }, 10000);

    fetchProviders({ limit: 8, sort: 'rating' });
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { showCTA, visitedCTA } = this.props;
    if (window.scrollY > 400 && !visitedCTA) showCTA();
  };

  showQuestionnaireIntro = () => {
    const { showQuestionnaireIntro } = this.props;
    showQuestionnaireIntro();
  };

  handleProviderType = (type) => {
    const { history } = this.props;
    window.analytics.track('Provider Type Clicked', {
      location: '/',
      type,
    });
    history.push(`/providers?${qs.stringify({ type })}`);
  };

  handleBannerCTAClick = () => {
    window.analytics.track('CTA Clicked', {
      location: '/',
      source: 'Home page banner CTA',
    });
    const { showQuestionnaireIntro } = this.props;
    showQuestionnaireIntro();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = (provider) => {
    this.setState({
      open: true,
      provider,
    });
  };

  render() {
    const { providers } = this.props;
    const { open, provider } = this.state;

    return (
      <div>
        <div className="component-home">
          <div className="hero-container">
            <div className="hero-row home-row" style={{ backgroundImage: `url(${Banner})` }}>
              <div className="text-container">
                <h1 className="text">
                  Find the right doctors for your back pain
                </h1>

                <h1 className="sub-text">
                  Relieve your pain by finding the best providers in Denver
                </h1>
              </div>
            </div>
          </div>

          <div className="provider-type-container">
            <div className="home-row">
              <h1 className="provider-heading">
                What type of provider are you looking for?
              </h1>

              <div className="horizontal-container">
                <div
                  onClick={() => this.handleProviderType(providerTypeText.physicalTherapy)}
                  onKeyPress={() => this.handleProviderType(providerTypeText.physicalTherapy)}
                  role="button"
                  tabIndex={-1}
                  className="provider-row"
                >
                  <img alt="Physical" src={PhysicalBg} className="provider-image" />

                  <div className="provider-title">
                    Physical Therapists
                  </div>

                  <div className="text-block">
                    Good option when...
                  </div>

                  <div>
                    <div className="provider-option">
                      <img alt="Map" src={CheckMark} className="check-icon" />

                      Pain has lasted 4-6 weeks
                    </div>

                    <div className="provider-option">
                      <img alt="Map" src={CheckMark} className="check-icon" />

                      You want conservative treatment
                    </div>

                    <div className="btn-primary">
                      Therapists
                      <TrendingFlat color={white} className="right-icon" />
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => this.handleProviderType(providerTypeText.minimallyInvasive)}
                  onKeyPress={() => this.handleProviderType(providerTypeText.minimallyInvasive)}
                  role="button"
                  tabIndex={-1}
                  className="provider-row"
                >
                  <img alt="Minimally" src={MinimallyBg} className="provider-image" />

                  <div className="provider-title">
                    Minimally Invasive Specialists
                  </div>

                  <div className="text-block">
                    Good option when...
                  </div>

                  <div>
                    <div className="provider-option">
                      <img alt="Map" src={CheckMark} className="check-icon" />

                      Other treatment hasn&apos;t work
                    </div>

                    <div className="provider-option">
                      <img alt="Map" src={CheckMark} className="check-icon" />

                      You want to avoid surgery
                    </div>

                    <div className="btn-primary">
                      Specialists
                      <TrendingFlat color={white} className="right-icon" />
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => this.handleProviderType(providerTypeText.spineSurgery)}
                  onKeyPress={() => this.handleProviderType(providerTypeText.spineSurgery)}
                  role="button"
                  tabIndex={-1}
                  className="provider-row"
                >
                  <img alt="Spine" src={SpineBg} className="provider-image" />

                  <div className="provider-title">
                    Spine Surgeons
                  </div>

                  <div className="text-block">
                    Good option when...
                  </div>

                  <div>
                    <div className="provider-option">
                      <img alt="Map" src={CheckMark} className="check-icon" />

                      You have a referral from a doctor
                    </div>

                    <div className="provider-option">
                      <img alt="Map" src={CheckMark} className="check-icon" />

                      You know your diagnosis
                    </div>

                    <div className="btn-primary">
                      Surgeons
                      <TrendingFlat color={white} className="right-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nearby-providers-container">
            <div className="home-row">
              <h1 className="nearby-provider-title">
                {'Specialist Doctors Close to You'}
              </h1>

              <h3 className="nearby-provider-subtitle">
                {'Top Rated Specialists Around Denver'}
              </h3>

              {
                isMobile
                  ? <AreaProvidersMobile providers={providers} onOpen={this.handleOpen} />
                  : <AreaProvidersDesktop providers={providers} onOpen={this.handleOpen} />
              }
            </div>
          </div>

          {provider && (
            <ProviderDetailModal
              handleClose={this.handleClose}
              open={open}
              provider={provider}
            />
          )}

          <div className="explainer-container">
            <div className="home-row">
              <div className="card-inner-container">
                <div className="left-container">
                  <div className="explainer-step-text">
                    STEP 1
                  </div>

                  <div className="explainer-title">
                    Compare top doctors in your area without searching for hours.
                  </div>

                  <div className="explainer-sub-title">
                    The PainTheory Composite Rating is a proprietary algorithm that compiles
                    information from across the web to help you select the best providers near you.
                  </div>
                </div>

                <div className="right-container">
                  <img alt="Step 1" src={ExplainerStep1} className="explainer-img" />
                </div>
              </div>

              <div className="card-inner-container funnel-outer-container">
                <div className="right-container">
                  <img alt="FunnelDot" src={FunnelDot} className="funnel-img" />
                  <img alt="Step 2" src={ExplainerStep2} className="explainer-img" />
                </div>

                <div className="left-container">
                  <div className="explainer-step-text">
                    STEP 2
                  </div>

                  <div className="explainer-title">
                    Decide on a provider that meets your individual needs.
                  </div>

                  <div className="explainer-sub-title">
                    In addition to creating a Composite Rating, PainTheory shows you perks
                    and benefits that can help you decide which provider is right for you.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-banner-container">
            <div className="home-row">
              <div className="title">
                Ready to get rid of your pain?
              </div>

              <div className="sub-title">
                Take a look at some of our specialists
              </div>

              <div
                onClick={this.handleBannerCTAClick}
                onKeyPress={() => {}}
                role="button"
                className="btn-finder-action"
                tabIndex={-1}
              >
                GET STARTED
                <TrendingFlat color={white} className="right-icon" />
              </div>

              <div className="finder-container">
                <div className="finder-inner-container">
                  <img
                    alt="Provider"
                    src={isMobile ? MobileProvider : DesktopProvider}
                    className="img-finder"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  fetchProviders: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  providers: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.object),
    total: PropTypes.number,
  }).isRequired,
  showCTA: PropTypes.func.isRequired,
  showQuestionnaireIntro: PropTypes.func.isRequired,
  visitedCTA: PropTypes.bool.isRequired,
};

export default Home;
