import _ from 'lodash';

const config = () => {
  // Create a queue, but don't obliterate an existing one!
  const analytics = window.analytics || [];

  // If the real analytics.js is already on the page return.
  if (analytics.initialize) return window.analytics;

  // If the snippet was invoked already show an error.
  if (analytics.invoked) {
    if (window.console && console.error) { // eslint-disable-line
      console.error('Segment snippet included twice.'); // eslint-disable-line
    }
    return null;
  }

  // Invoked flag, to make sure the snippet is never invoked twice.
  analytics.invoked = true;

  // A list of the methods in Analytics.js to stub.
  analytics.methods = [
    'trackSubmit',
    'trackClick',
    'trackLink',
    'trackForm',
    'pageview',
    'identify',
    'reset',
    'group',
    'track',
    'ready',
    'alias',
    'page',
    'once',
    'off',
    'on',
  ];

  // Define a factory to create stubs. These are placeholders
  // for methods in Analytics.js so that you never have to wait
  // for it to load to actually record data. The `method` is
  // stored as the first argument, so we can replay the data.
  analytics.factory = method => (
    () => {
      const args = Array.prototype.slice.call(arguments); // eslint-disable-line
      args.unshift(method);
      analytics.push(args);
      return analytics;
    }
  );

  // For each of our methods, generate a queueing stub.
  _.forEach(analytics.methods, (key) => {
    analytics[key] = analytics.factory(key);
  });

  // Define a method to load Analytics.js from our CDN,
  // and that will be sure to only ever load it once.
  analytics.load = (key) => {
    // Create an async script element based on your key.
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `${document.location.protocol === 'https:' ? 'https://' : 'http://'}cdn.`
    + `segment.com/analytics.js/v1/${key}/analytics.min.js`;

    // Insert our script next to the first script element.
    const first = document.getElementsByTagName('script')[0];
    if (first) {
      first.parentNode.insertBefore(script, first);
    }
  };

  // Add a version to keep track of what's in the wild.
  analytics.SNIPPET_VERSION = '3.1.0';

  // Load Analytics.js with your key, which will automatically
  // load the tools you've enabled for your account. Boosh!
  analytics.load(process.env.SEGMENT_KEY);

  // Make the first page call to load the integrations. If
  // you'd like to manually name or tag the page, edit or
  // move this call however you'd like.
  analytics.page();

  return analytics;
};

(() => {
  config();
})();

export default {
  config,
};
