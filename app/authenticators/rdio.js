import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ENV from '../config/environment';

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
        return Ember.$.ajax({
          type: 'POST',
          url: `${ENV.APP.API_URL}/sessions`,
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
