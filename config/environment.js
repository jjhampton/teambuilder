/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'teambuilder',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    'simple-auth': {
    authorizer: 'authorizer:parse',
    authenticationRoute: 'sessions.create',
    crossOriginWhitelist: ['https://api.parse.com'],
    },

    APP: {
      applicationId: '2LyY9FE22SGEpGNjywuiXAQd5mismhpxCcQAtzHX',
      restApiId: '5C2WXxLMKNOCehjv7OoOud29Z4FckwOFelnivMvi'
    },
    contentSecurityPolicy: {
      'default-src': "'self' ",
      'script-src': "'self' 'unsafe-inline' d3js.org maps.gstatic.com ",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' api.parse.com",
      'img-src': "'self' ",
      'style-src': "'self' 'unsafe-inline' ",
      'media-src': "'self' "
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
