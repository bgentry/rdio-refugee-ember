import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  torii: Ember.inject.service(),

  restore(data) {
    return Ember.RSVP.resolve(data);
  },

  authenticate(state) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.get('torii').open('rdio-oauth2', state).then((data) => {
        return Ember.$.ajax({
          type: 'POST',
          url: '/sessions',
          data: { code: data.authorizationCode },
          dataType: 'json'
        });
      }).then((data) => {
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  }
});
