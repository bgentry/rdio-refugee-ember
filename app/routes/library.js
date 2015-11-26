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
    }
  }
});
