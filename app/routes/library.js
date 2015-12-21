import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ENV from '../config/environment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    startSync() {
      console.log('starting sync...');
      this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
        const headers = {};
        headers[headerName] = headerValue;
        Ember.$.ajax({
          type: 'POST',
          url: `${ENV.APP.API_URL}/sync-from-rdio`,
          headers
        });
      });
    },
    matchWithSpotify() {
      console.log('starting spotify match...');
      this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
        const headers = {};
        headers[headerName] = headerValue;
        Ember.$.ajax({
          type: 'POST',
          url: `${ENV.APP.API_URL}/match-with-spotify`,
          headers
        });
      });
    },
    saveToSpotify() {
      this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
        const headers = {};
        headers[headerName] = headerValue;
        Ember.$.ajax({
          type: 'POST',
          url: `${ENV.APP.API_URL}/save-to-spotify`,
          headers
        });
      });
    },
    signIntoSpotify() {
      const route = this;
      return new Ember.RSVP.Promise((resolve, reject) => {
        this.get('torii').open('spotify-oauth2', 'state').then((data) => {
          this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
            const headers = {};
            headers[headerName] = headerValue;

            return Ember.$.ajax({
              type: 'PATCH',
              url: `${ENV.APP.API_URL}/auth/spotify`,
              contentType: 'application/json;charset=utf-8',
              data: JSON.stringify({
                code: data.authorizationCode
              }),
              dataType: 'json',
              headers,
              success() {
                route.send('reloadCurrentUser');
              }
            });
          });
        }).then((data) => {
          resolve(data);
        }).catch((error) => {
          reject(error);
        });
      });
    }
  }
});
