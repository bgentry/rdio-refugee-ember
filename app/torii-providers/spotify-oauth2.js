import Oauth2 from 'torii/providers/oauth2-code';
import {configurable} from 'torii/configuration';

/**
 * This class implements authentication against Spotify
 * using the OAuth2 authorization flow in a popup window.
 * @public @class
 */
export default Oauth2.extend({
  name:       'spotify-oauth2',
  baseUrl:    'https://accounts.spotify.com/authorize',

  optionalUrlParams: ['scope', 'request_visible_actions', 'access_type', 'approval_prompt', 'hd'],
  accessType: configurable('accessType', ''),
  scope: configurable('scope', ''),

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
