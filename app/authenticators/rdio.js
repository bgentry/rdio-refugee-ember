import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

// TODO: base this authenticator on the following:
// https://github.com/simplabs/ember-simple-auth/blob/master/addon/authenticators/oauth2-password-grant.js
// https://github.com/jpadilla/ember-cli-simple-auth-token/blob/master/addon/authenticators/jwt.js

export default Base.extend({
  torii: Ember.inject.service(),

  restore(data) {
    return Ember.RSVP.resolve(data);
  },

  authenticate(state) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.get('torii').open('rdio-oauth2', state).then((data) => {
        // TODO: use a non-localhost API target or pull from settings
        console.log('data in rdio authenticator:', data);
        return Ember.$.ajax({
          type: 'POST',
          url: 'http://localhost:8000/sessions',
          contentType: 'application/json;charset=utf-8',
          data: JSON.stringify({
            code: data.authorizationCode,
            redirectUrl: data.redirectUrl
          }),
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
