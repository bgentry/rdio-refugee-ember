import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    startSync() {
      console.log('starting sync...');
      // TODO: use a non-localhost API target or pull from settings
      this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
        const headers = {};
        headers[headerName] = headerValue;
        Ember.$.ajax({
          type: 'POST',
          url: 'http://localhost:8000/sync-from-rdio',
          headers
        });
      });
    },
    matchWithSpotify() {
      console.log('starting spotify match...');
      // TODO: use a non-localhost API target or pull from settings
      this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
        const headers = {};
        headers[headerName] = headerValue;
        Ember.$.ajax({
          type: 'POST',
          url: 'http://localhost:8000/match-with-spotify',
          headers
        });
      });
    },
    signIntoSpotify() {
      const route = this;
      return new Ember.RSVP.Promise((resolve, reject) => {
        this.get('torii').open('spotify-oauth2', 'state').then((data) => {
          // TODO: use a non-localhost API target or pull from settings
          this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
            const headers = {};
            headers[headerName] = headerValue;

            return Ember.$.ajax({
              type: 'PATCH',
              url: 'http://localhost:8000/auth/spotify',
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
