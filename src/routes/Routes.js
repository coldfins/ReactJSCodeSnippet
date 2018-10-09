import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { Switch, Route, Link } from 'react-router-dom';
import { AppBar } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import TrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import qs from 'query-string';
import { StickyContainer, Sticky } from 'react-sticky';
import IntroductionModal from '../components/IntroductionModal';
import QuestionnaireModal from '../components/QuestionnaireModal';
import CTAPopupToast from '../components/CTAPopupToast';
import { setAd } from '../store/actions/patients';
import Footer from './footer';
import Treatments from './treatments';
import TermsConditions from './static/termsConditions';
import Privacy from './static/privacy';
import Loading from '../components/Loading';
import {} from '../services/analytics';
import GenerateMongoId from '../helpers/mongo';
import painTheoryWordmark from '../assets/images/logos/paintheory_wordmark.svg';

const Home = Loadable({
  loader: () => import('./home'),
  loading: Loading,
});
const Result = Loadable({
  loader: () => import('./result'),
  loading: Loading,
});
const Condition = Loadable({
  loader: () => import('./condition'),
  loading: Loading,
});
const Conditions = Loadable({
  loader: () => import('./conditions'),
  loading: Loading,
});
const Directions = Loadable({
  loader: () => import('./directions'),
  loading: Loading,
});
const Schedule = Loadable({
  loader: () => import('./schedule'),
  loading: Loading,
});
const Contact = Loadable({
  loader: () => import('./contact'),
  loading: Loading,
});
const Confirmation = Loadable({
  loader: () => import('./confirmation'),
  loading: Loading,
});
const MedicalRelease = Loadable({
  loader: () => import('./medicalRelease'),
  loading: Loading,
});
const MedicalHelp = Loadable({
  loader: () => import('./medicalHelp'),
  loading: Loading,
});
const Providers = Loadable({
  loader: () => import('./providers'),
  loading: Loading,
});
const Disclaimer = Loadable({
  loader: () => import('./static/disclaimer'),
  loading: Loading,
});
const Faq = Loadable({
  loader: () => import('./static/faq/Faq'),
  loading: Loading,
});
const ProviderFaq = Loadable({
  loader: () => import('./static/faq/ProviderFaq'),
  loading: Loading,
});
const NotFoundPage = Loadable({
  loader: () => import('../components/NotFoundPage'),
  loading: Loading,
});

class Routes extends PureComponent {
  componentDidMount() {
    const { location } = this.props;
    const query = qs.parse(location.search);

    if (_.isNil(localStorage.getItem('uniqueIdentifier'))) {
      localStorage.setItem('uniqueIdentifier', GenerateMongoId(24));
    }
    if (window.analytics) window.analytics.identify(localStorage.getItem('uniqueIdentifier'));

    setAd({
      campaign: query.utm_campaign,
      campaignId: query.campaign_id,
      id: query.ad_id,
      source: query.utm_source,
    });
  }

  advance = (type) => {
    const { history, showQuestionnaireAction } = this.props;
    showQuestionnaireAction('search', false);
    history.push(_.isNil(type) ? '/providers' : `/providers?type=${type}`);
  };

  closeIntroductionModal = () => {
    const { showQuestionnaireIntroAction } = this.props;
    window.analytics.track('Close Questionnaire Intro', {
      source: 'Intro',
    });
    showQuestionnaireIntroAction(false);
  };

  closeQuestionnaireModal = () => {
    const { showQuestionnaireAction } = this.props;
    window.analytics.track('Close Questionnaire', {
      source: 'Questions',
    });
    showQuestionnaireAction('search', false);
  };

  closeCTAToast = () => {
    const { showCTAAction, visitedCTA } = this.props;
    window.analytics.track('Show CTA Toast');
    showCTAAction(false, !visitedCTA);
  };

  handleAppBarCTAClick = () => {
    const { showQuestionnaireIntroAction } = this.props;
    window.analytics.track('Open Questionnaire Intro', {
      source: 'App Bar CTA',
    });
    this.closeCTAToast();
    showQuestionnaireIntroAction(true);
  };

  openQuestionnaire = () => {
    const { showQuestionnaireAction, showQuestionnaireIntroAction } = this.props;
    window.analytics.track('Start Questionnaire', {
      source: 'Questionnaire Intro',
    });
    this.closeCTAToast();
    showQuestionnaireAction('search', true);
    showQuestionnaireIntroAction(false);
  };

  render() {
    const {
      location,
      history,
      match: { path },
      match,
      showCTA,
      questionnaireId,
      showQuestionnaire,
      showQuestionnaireIntro,
      visitedCTA,
    } = this.props;
    const renderMergedProps = (component, ...rest) => {
      const finalProps = {
        ...rest, history, location, match,
      };
      return (
        React.createElement(component, finalProps)
      );
    };
    const PropsRoute = ({ component, ...rest }) => (
      <Route
        {...rest}
        render={routeProps => renderMergedProps(component, routeProps, rest)}
      />
    );

    return (
      <div className="component-routes">
        <div className="inner-container">
          <StickyContainer className="sticky-container">
            <Sticky>
              {({ style, distanceFromTop }) => (
                <div
                  style={style}
                  className={`sticky-app-bar ${distanceFromTop <= -200 ? 'blend' : ''}`}
                >
                  <AppBar
                    iconElementLeft={(
                      <div className="app-bar-left">
                        <Link to="/">
                          <img
                            alt="Pain Theory"
                            src={painTheoryWordmark}
                            className="logo"
                          />
                        </Link>

                        <ul className="nav-bar">
                          <li className="nav-link">
                            <Link to="/providers">
                              Providers
                            </Link>
                          </li>

                          <li className="nav-link">
                            <Link to="/conditions">
                              Conditions
                            </Link>
                          </li>

                          <li className="nav-link">
                            <Link to="/treatments">
                              Treatments
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                    iconElementRight={(
                      <div className="right-container">
                        <span className="title-text">
                          Need help with your pain?
                        </span>

                        <div
                          onClick={this.handleAppBarCTAClick}
                          onKeyPress={this.handleAppBarCTAClick}
                          role="button"
                          className="action-button"
                          tabIndex={-1}
                        >
                          Find a provider
                        </div>

                        <IconButton className="right-icon">
                          <TrendingFlat className="trending-icon" />
                        </IconButton>
                      </div>
                    )}
                    className="app-bar"
                  />
                </div>
              )}
            </Sticky>

            <Switch>
              <PropsRoute exact path={path} component={Home} />
              <PropsRoute path={`${path}conditions/:id`} component={Condition} />
              <PropsRoute path={`${path}conditions`} component={Conditions} />
              <PropsRoute path={`${path}confirmation`} component={Confirmation} />
              <PropsRoute path={`${path}contact`} component={Contact} />
              <PropsRoute path={`${path}disclaimer`} component={Disclaimer} />
              <PropsRoute path={`${path}directions`} component={Directions} />
              <PropsRoute path={`${path}faq`} component={Faq} />
              <PropsRoute path={`${path}medical-help`} component={MedicalHelp} />
              <PropsRoute path={`${path}medical-release`} component={MedicalRelease} />
              <PropsRoute path={`${path}provider-faq`} component={ProviderFaq} />
              <PropsRoute path={`${path}providers`} component={Providers} />
              <PropsRoute path={`${path}privacy`} component={Privacy} />
              <PropsRoute path={`${path}result`} component={Result} />
              <PropsRoute path={`${path}schedule`} component={Schedule} />
              <PropsRoute path={`${path}treatments`} component={Treatments} />
              <PropsRoute path={`${path}terms-conditions`} component={TermsConditions} />
              <PropsRoute component={NotFoundPage} />
            </Switch>

            <IntroductionModal
              onNext={this.openQuestionnaire}
              onRequestClose={this.closeIntroductionModal}
              open={showQuestionnaireIntro}
            />

            <QuestionnaireModal
              advance={this.advance}
              onRequestClose={this.closeQuestionnaireModal}
              open={showQuestionnaire}
              questionnaireId={questionnaireId}
            />

            {showCTA && !visitedCTA && (
              <CTAPopupToast
                onRequestClose={this.closeCTAToast}
                onNavigate={this.handleAppBarCTAClick}
              />
            )}

            <Footer />
          </StickyContainer>
        </div>
      </div>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  questionnaireId: PropTypes.string.isRequired,
  showCTA: PropTypes.bool.isRequired,
  showCTAAction: PropTypes.func.isRequired,
  showQuestionnaire: PropTypes.bool.isRequired,
  showQuestionnaireAction: PropTypes.func.isRequired,
  showQuestionnaireIntro: PropTypes.bool.isRequired,
  showQuestionnaireIntroAction: PropTypes.func.isRequired,
  visitedCTA: PropTypes.bool.isRequired,
};

export default Routes;
