/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'rdio2spotify',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'ember-simple-auth': {
      authenticationRoute: 'login',
      crossOriginWhitelist: ['http://localhost:8000'],
    },
    torii: {
      sessionServiceName: 'session',
      providers: {
        'rdio-oauth2': {
          apiKey: 'fpfhz6k7qzgzvazadbup2bo474',
        },
        'spotify-oauth2': {
          scope: 'user-library-modify,user-library-read,user-read-private',
          apiKey: '0488da3e1a7549e299ab4e26e0b5c0d1',
        }
      }
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
