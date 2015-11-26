import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

// from http://miguelcamba.com/blog/2015/06/18/how-to-inject-the-current-user-using-ember-simple-auth/

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel() {
    if (this.session.isAuthenticated) {
      return this._populateCurrentUser();
    }
  },

  sessionAuthenticated() {
    this._populateCurrentUser().then(() => {
      this.transitionTo('library');
    });
  },

  _populateCurrentUser() {
    const userID = this.get('session.data.authenticated.user_id');
    if (!Ember.isEmpty(userID)) {
      return this.store.find('user', userID).then((user) => {
        this.get('currentUser').set('content', user);
      });
    }
  }
});
