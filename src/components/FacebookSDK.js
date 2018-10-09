import React, { PureComponent } from 'react';
import packageJson from '../../package.json';

let AppEvents = null;

export const initiatedCheckoutFB = (nrt, price) => {
  const params = {};
  params[AppEvents.ParameterNames.CONTENT_ID] = nrt ? 'NRT' : 'COUNSEL';
  AppEvents.logEvent(
    AppEvents.EventNames.INITIATED_CHECKOUT,
    price,
    params,
  );
};

export const completedFBRegistration = (source) => {
  const params = {};
  params[AppEvents.ParameterNames.REGISTRATION_METHOD] = source;
  AppEvents.logEvent(
    AppEvents.EventNames.COMPLETED_REGISTRATION,
    null,
    params,
  );
};

export const logFBPageView = () => (
  AppEvents.logPageView()
);

export const logFBPurchase = (amount, currency) => (
  AppEvents.logPurchase(amount, currency)
);

export const updateFBUserProperties = props => (
  AppEvents.updateUserProperties(props)
);

export const setFBUser = id => (
  AppEvents.setUserID(id)
);

class FacebookSDK extends PureComponent {
  constructor(props) {
    super(props);

    window.fbAsyncInit = () => {
      window.FB.init({
        appId: process.env.FACEBOOK_APP_ID,
        autoLogAppEvents: false,
        version: 'v2.12',
        xfbml: true,
      });
      (({ AppEvents } = window.FB));
      AppEvents.setAppVersion(packageJson.version);
    };
  }

  registerSDK = (d, s, id) => {
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    const js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  };

  render() {
    return (
      <div>
        <script>
          {this.registerSDK(document, 'script', 'facebook-jssdk')}
        </script>
      </div>
    );
  }
}

export default FacebookSDK;
