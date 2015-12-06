import Ember from 'ember';
import DS from 'ember-data';
const { attr } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  firstName: attr('string'),
  displayName: attr('string'),
  rdioUsername: attr('string'),
  rdioIconUrl: attr('string'),
  rdioLibrarySynced: attr('boolean'),
  spotifyLoggedIn: attr('boolean'),
  spotifyMatched: attr('boolean'),
  createdAt: attr('date'),
  updatedAt: attr('date'),

  readyForSpotifyMatch: computed('rdioLibrarySynced', 'spotifyMatched', function() {
    return this.get('rdioLibrarySynced') && !this.get('spotifyMatched');
  })
});
