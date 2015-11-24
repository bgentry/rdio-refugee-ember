import Oauth2 from 'torii/providers/oauth2-code';
import {configurable} from 'torii/configuration';

/**
 * This class implements authentication against Rdio
 * using the OAuth2 authorization flow in a popup window.
 * @public @class
 */
export default Oauth2.extend({
  name:       'rdio-oauth2',
  baseUrl:    'https://www.rdio.com/oauth2/authorize',

  responseParams: ['code', 'state'],

  redirectUri: configurable('redirectUri', function() {
    // A hack that allows redirectUri to be configurable
    // but default to the superclass
    return this._super();
  }),

  fetch(authData) {
    // TODO: is there a better way to restore auth data?
    console.log('fetched authData:', authData);
    return authData; // returns the same data
  }
});
