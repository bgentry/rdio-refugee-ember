import Ember from 'ember';

// from http://miguelcamba.com/blog/2015/06/18/how-to-inject-the-current-user-using-ember-simple-auth/

export default {
  name: 'current-user',

  initialize(application) {
    const service = Ember.ObjectProxy.create({ isServiceFactory: true });
    application.register('service:current-user', service, { instantiate: false, singleton: true });
    application.inject('route', 'currentUser', 'service:current-user');
    application.inject('controller', 'currentUser', 'service:current-user');
    application.inject('component', 'currentUser', 'service:current-user');
  }
};
