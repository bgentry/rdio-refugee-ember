import Ember from 'ember';
import DS from 'ember-data';
const { computed } = Ember;
const { attr, hasMany } = DS;

export default DS.Model.extend({
  matches: hasMany('albumMatches'),
  rdioAlbum: attr(),
  selectedMatchId: attr('string'),

  rdioTrackCount: computed('rdioAlbum', function() {
    const rdioAlbum = this.get('rdioAlbum');
    return rdioAlbum.tracks.length;
  }),

  createdAt: attr('date'),
  updatedAt: attr('date')
});
