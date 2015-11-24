import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    authenticate() {
      this.get('session').authenticate('authenticator:rdio').catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
