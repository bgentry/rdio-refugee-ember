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
    },
    torii: {
      sessionServiceName: 'session',
      providers: {
        'rdio-oauth2': {
          apiKey: 'fpfhz6k7qzgzvazadbup2bo474',
        },
        'spotify-oauth2': {
          accessType: 'offline',
          scope: 'user-library-modify user-library-read user-read-private',
          apiKey: '0488da3e1a7549e299ab4e26e0b5c0d1',
          redirectUri: 'http://localhost:4210/login/spotify',
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

    ENV['ember-cli-mirage'] = {
      enabled: false
    };

    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' http://localhost:8000",
      'img-src': "'self' *.akamaihd.net *.cdn2-rdio.com",
      'style-src': "'self'",
      'media-src': "'self'"
    };
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
